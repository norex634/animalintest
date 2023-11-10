"use client"

import React, { useState, useEffect } from "react";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetFetchCategorieActus } from "@/utils/fetch/CategorieActu";
import { PatchActu, DeleteActu } from "@/utils/fetch/Actu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
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
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

// Créez un composant de cellule distinct
function CellComponent({ row }) {
  const [isOpen, setIsOpen] = useState(false);
  const [categorie, setCategorie] = useState([]);
  const actu = row.original;
  const actuName = actu.titre.toString();
  const actuId = actu.id;
  const [titre, setTitre] = useState("Titre de l'actualité");
  const [text, setText] = useState("Texte de l'actualité");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const router = useRouter();

  const categories = async () => {
    setCategorie(await GetFetchCategorieActus());
    
  };

  const buttonClick = async () => {
    await categories();
    setIsOpen(true);
    
  };

  const ondelete = async () => {
    await DeleteActu(actuId);
    router.refresh();
  }
 

  console.log(categorie)

  async function onsubmit() {
    if (titre && text && selectedCategoryId && actuId) {
      const data = { titre: titre, text: text, categorie: selectedCategoryId, catid: actuId };
      await PatchActu(data);
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
              navigator.clipboard.writeText(actuName);
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
                className="h-10 w-full p-0 hover-bg-[#28ccac] hover-text-white"
                variant="ghost"
              >
                Edit Actu
              </button>
            </DialogTrigger>
            {isOpen && (
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Actu</DialogTitle>
                  <DialogDescription>Modifier l&apos;actualité ici.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Titre
                    </Label>
                    <Input
                      id="name"
                      defaultValue={actu.titre}
                      onChange={(event) => setTitre(event.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Texte
                    </Label>
                    <Textarea
                      id="username"
                      defaultValue={actu.descr}
                      onChange={(event) => setText(event.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="descr" className="text-right">
                      Catégorie
                    </Label>
                    <select
                      className="flex h-10 w-[275px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      onChange={(event) => setSelectedCategoryId(event.target.value)}
                      defaultValue={actu.categorie.id}
                    >
                      {categorie.categoriesActus.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.nom}
                        </option>
                      ))}
                    </select>
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
  );
}

// Utilisez le composant de cellule personnalisé
export const Columns = [
  {
    accessorKey: "titre",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          titre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
    )},
  },
  {
    accessorKey: "descr",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          description
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
    )},
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
    )},
  },
  {
    accessorKey: "categorie.nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          categorie
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
    )},
  },
  {
    id: "action",
    cell: CellComponent, // Utilisez le composant personnalisé comme cell
  },
];
