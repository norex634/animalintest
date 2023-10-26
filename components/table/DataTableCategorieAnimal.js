// Importation des composants et bibliothèques nécessaires
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import * as React from "react"


import {
  ColumnDef,
  // Filtrage
  ColumnFiltersState,
  getFilteredRowModel,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  // Recherche
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { PostCategorieAnimal } from "@/utils/fetch/CategorieAnimal"

// Composant DataTable avec des propriétés
export function DataTable({
  columns,
  data,
  pageval
}) {

  // Gestion du filtrage
  const [columnFilters, setColumnFilters] = React.useState([])
  const [sorting, setSorting] = React.useState([])

  // État local pour les champs de titre, de texte et de catégorie
  const [nom, setNom] = React.useState("Nom de la catégorie");
  const [img, setImg] = React.useState("Image de la catégorie");
  const [open, setOpen] = React.useState(false);
  const router = useRouter()

  // Fonction pour gérer le clic sur le bouton "Ajouter"
  async function buttonClick() {
    if (nom) {
      // Créez un objet data avec les valeurs du formulaire
      const data = { nom: nom, img: img}
      // Effectuez une requête POST à l'API
      await PostCategorieAnimal(data);
      // Fermez la boîte de dialogue et actualisez la page
      setOpen(false);
      router.refresh()
    } else {
      // Affichez une alerte si tous les champs ne sont pas remplis
      alert("Veuillez remplir tous les champs")
    }
  }

  // Initialisation de la table avec les données et les colonnes
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // Filtrage
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    // Tri
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    // Pagination
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: pageval || 10,
      },
    },
  })

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <div className="flex pt-2">
          {/* Champ de filtrage par nom */}
          <Input
            placeholder="Filtrer par nom..."
            value={(table.getColumn("nom")?.getFilterValue()) ?? ""}
            onChange={(event) =>
              table.getColumn("nom")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        <div className="p-2 bg">
          {/* Boîte de dialogue pour ajouter une nouvelle catégorie actu */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="text-[#ffffff] bg-[#222222] hover:bg-[#28ccac] hover:text-[#ffffff]" variant="outline">Ajouter</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] ">
              <DialogHeader>
                <DialogTitle>Nouvelles catégorie</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="titre" className="text-right">
                    Nom
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Nom de la catégorie"
                    onChange={(event) => setNom(event.target.value)}
                    className="col-span-3"
                  />
                </div>
              </div>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="titre" className="text-right">
                    img
                  </Label>
                  <Input
                    id="img"
                    defaultValue="img de la catégorie"
                    onChange={(event) => setImg(event.target.value)}
                    className="col-span-3"
                  />
                </div>
                
                
              </div>
              <DialogFooter>
                {/* Bouton "Ajouter" dans la boîte de dialogue */}
                <Button
                  onClick={buttonClick}
                  type="submit"
                >
                  Ajouter
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          {/* En-tête du tableau */}
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          {/* Corps du tableau avec les données */}
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Aucun résultat.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-center px-2 mt-2 ">
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium ">Éléments par page</p>
            {/* Sélecteur pour le nombre d'éléments par page */}
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value))
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={table.getState().pagination.pageSize} />
              </SelectTrigger>
              <SelectContent side="top">
                {[5, 10, 15, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-[100px] items-center justify-center text-sm font-medium ">
            {/* Affichage de la page actuelle et du nombre total de pages */}
            Page {table.getState().pagination.pageIndex + 1} sur{" "}
            {table.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Aller à la première page</span>
              <DoubleArrowLeftIcon className="h-4 w-4 text-[#121417]" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Aller à la page précédente</span>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Aller à la page suivante</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Aller à la dernière page</span>
              <DoubleArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
