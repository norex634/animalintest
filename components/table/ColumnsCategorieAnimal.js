"use client"
import React, { useState, useEffect } from "react";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
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
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { PatchCategorieAnimal,DeleteCategorieAnimal } from "@/utils/fetch/CategorieAnimal";

function CellComponent ({ row }){
  const [isOpen, setIsOpen] = useState(false);
  const categorieRow = row.original;
  const categorieName = categorieRow.nom.toString();
  const categorieId = categorieRow.id;
  const [nom, setNom] = useState("Titre de l'actualité");
  const router = useRouter();

  const buttonClick = async () => {
    setIsOpen(true);
  };

  const ondelete = async () => {
    await DeleteCategorieAnimal(categorieId);
    router.refresh();
  }
  
  async function onsubmit() {
    if (nom && categorieId) {
      const data = { nom: nom, categorieId: categorieId };
       await PatchCategorieAnimal(data);
      setIsOpen(false);
      router.refresh();
    } else {
      alert("Veuillez remplir tous les champs");
    }
  }

  return (
    <>
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 bg-[#222222] text-[#ffffff] hover:bg-[#28ccac]">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <button
            onClick={() => {
              navigator.clipboard.writeText(categorieName);
            }}
            className="mb-2 h-10 w-full p-0 hover:bg-[#28ccac] hover:text-white"
            variant="ghost"
          >
            copier nom
          </button>
          <Dialog>
            <DialogTrigger asChild>
              <button
                onClick={buttonClick}
                className="h-10 w-full p-0 hover:bg-ac hover:text-white"
                variant="ghost"
              >
                Edit Type
              </button>
            </DialogTrigger>
            {isOpen && (
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Type</DialogTitle>
                  <DialogDescription>Modifier le type ici.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Type
                    </Label>
                    <Input
                      id="name"
                      defaultValue={categorieName}
                      onChange={(event) => setNom(event.target.value)}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={onsubmit} type="submit">
                    Save changes
                  </Button>
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
      header: "Nombre d'animaux",
      cell: ({ row }) => {
        const animalCount = row.original.animal.length;
        return <span>{animalCount}</span>;
      },
    },
    {
      id: "action",
      cell: CellComponent,
    }
  ]
