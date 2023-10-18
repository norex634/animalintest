// Importation des composants et bibliothèques nécessaires
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import * as React from "react"
import { PostActu } from "@/utils/fetch/Actu"

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
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"

// Composant DataTable avec des propriétés
export function DataTable({
  columns,
  data,
  pageval,
  categorieactu
}) {

  // Gestion du filtrage
  const [columnFilters, setColumnFilters] = React.useState([])
  const [sorting, setSorting] = React.useState([])

  // État local pour les champs de titre, de texte et de catégorie
  const [titre, setTitre] = React.useState("Titre de l'actualité");
  const [text, setText] = React.useState("Texte de l'actualité");
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const router = useRouter()

  // Fonction pour gérer le clic sur le bouton "Ajouter"
  async function buttonClick() {
    if (titre && text && selectedCategoryId) {
      // Créez un objet data avec les valeurs du formulaire
      const data = { titre: titre, text: text, categorie: selectedCategoryId }
      // Effectuez une requête POST à l'API
      await PostActu(data);
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
        <div className="flex py-4">
          {/* Champ de filtrage par titre */}
          <Input
            placeholder="Filtrer par titre..."
            value={(table.getColumn("titre")?.getFilterValue()) ?? ""}
            onChange={(event) =>
              table.getColumn("titre")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        <div className="py-6 bg">
          {/* Boîte de dialogue pour ajouter une nouvelle actualité */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Ajouter</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Nouvelles actualités</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="titre" className="text-right">
                    Titre
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Titre de l'actualité"
                    onChange={(event) => setTitre(event.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="descr" className="text-right">
                    Texte
                  </Label>
                  <Textarea
                    id="username"
                    defaultValue="Texte de l'actualité"
                    onChange={(event) => setText(event.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  {/* Catégorie pour l'actualité */}
                  <Label htmlFor="descr" className="text-right">
                    Catégorie
                  </Label>
                  <select
                    className="flex h-10 w-[275px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    onChange={(event) => setSelectedCategoryId(event.target.value)}
                    value={selectedCategoryId || ""}
                  >
                    <option selected>Choisissez une catégorie</option>
                    {categorieactu.map((categorie) => (
                      <option key={categorie.id} value={categorie.id}>{categorie.nom}</option>
                    ))}
                  </select>
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
      <div className="flex items-center justify-center px-2 mt-2">
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Éléments par page</p>
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
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
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
              <DoubleArrowLeftIcon className="h-4 w-4" />
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
