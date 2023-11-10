"use client"
import React, { useState,useEffect } from "react"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {GetFetchCategorieActus, PatchCategorieActu, DeleteCategorieActu} from "@/utils/fetch/CategorieActu"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function CellComponent({ row }) {
  const catActu = row.original
  const catActuName = catActu.nom
  const catActuId = catActu.id
  const [isOpenCat, setIsOpenCat] = useState(false)
  const [categorie, setCategorie] = useState([])
  const [nom, setNom] = React.useState("Nom de la catégorie");
  const router = useRouter()
  const categories = async () => {
    setCategorie(await GetFetchCategorieActus())
  }
  const buttonClick = async () => {
    await categories()
    setIsOpenCat(true)
  }

  const ondelete = async () => {
    await DeleteCategorieActu(catActuId);
    router.refresh();
  }

  // Fonction pour gérer le clic sur le bouton "Ajouter"
  async function onsubmit() {
    if (nom && catActuId) {
      // Créez un objet data avec les valeurs du formulaire
      const data = { nom: nom, catid: catActuId }
      // Effectuez une requête POST à l'API
      
       await PatchCategorieActu(data);
      // Fermez la boîte de dialogue et actualisez la page
      
      setIsOpenCat(false);
      router.refresh()
    } else {
      // Affichez une alerte si tous les champs ne sont pas remplis
      alert("Veuillez remplir tous les champs")
    }
  }
  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button varian='ghost'className="h-8 w-8 p-0 bg-[#222222] text-[#ffffff] hover:bg-[#28ccac]">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        

        <button
          onClick={()=>{
            navigator.clipboard.writeText(catActuName)
          }}
          className=" mb-2 h-10 w-full p-0 hover:bg-[#28ccac] hover:text-white" 
          variant="ghost">
          copier nom 
        </button>

        

        <Dialog >
  <DialogTrigger asChild>
    <button 
      onClick={buttonClick}
      className="h-10 w-full p-0  hover:bg-[#28ccac] hover:text-white" 
      variant="ghost">
      Edit catégorie
    </button>
  </DialogTrigger>
  {isOpenCat && (
    <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit Catégorie</DialogTitle>
      <DialogDescription>
        Modiffier la catégorie ici.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Nom
        </Label>
        <Input
          id="name"
          defaultValue={catActu.nom}
          onChange={(event) => setNom(event.target.value)}
          className="col-span-3"
        />
      </div>
    </div>
    <DialogFooter>
      <Button onClick={onsubmit} type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
  )}
  
</Dialog>
<button
            onClick={ondelete}
            className="h-10 w-full p-0 hover:bg-[#28ccac] hover:text-white"
            variant="ghost"
          >
            Supprimer
          </button>

      </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}

export const Columns = [
  {
    accessorKey: "nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "count",
    header: "Nombre d'actu",
    cell: ({ row }) => {
      const animalCount = row.original.actu.length;
      return <span>{animalCount}</span>;
    },
  },
  {
    id: "action",
    cell: CellComponent,
  }
  
  
]
