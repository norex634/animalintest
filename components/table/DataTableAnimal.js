"use client"
import { Button } from "@/components/ui/button"
//import Pagi from "../pagination/Pagi"
import { Input } from "@/components/ui/input"
import * as React from "react"
import { useRouter } from "next/navigation"
import { PostAnimal } from "@/utils/fetch/Animal"


import {
  ColumnDef,
  //filter
  ColumnFiltersState,
  getFilteredRowModel,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  // search
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





export function DataTable({
  columns,
  data,
  pageval,
  race,
  sexe,
  categorie
  
}) {
  //filter
  const [columnFilters, setColumnFilters] = React.useState([])
  const [sorting, setSorting] = React.useState([])

  const [RaceId, setRaceId] = React.useState(null)
  const [SexeId, setSexeId] = React.useState(null)
  const [CategorieId, setCategorieId] = React.useState(null)
  const [nom, setNom] = React.useState([])
  const [naissance, setNaissance] = React.useState([])
  const [descrShort, setDescrShort] = React.useState([])
  const [descr, setDescr] = React.useState([])

  //fonction pour upload multiple image
  const [images, setImages] = React.useState([])
  // la fonction pour upload les images
  const uploadImage = async e => {
    const files = Array.from(e.target.files)
    setImages(files)
  }



  const [open, setOpen] = React.useState(false);
  const router = useRouter()

    // Fonction pour gérer le clic sur le bouton "Ajouter"
    async function buttonClick() {
      if (nom && naissance && SexeId && RaceId && CategorieId &&descrShort && descr&& images.length > 0) {
        // Créez un objet data avec les valeurs du formulaire
        const formData = new FormData()
        const data = { nom: nom, naissance: naissance, descrShort: descrShort, descr:descr, categorie:CategorieId, race:RaceId, sexe:SexeId}
        
        formData.append('data', JSON.stringify(data))
        
        // Ajoutez les fichiers individuels au FormData
        for (const file of images) {
          formData.append('files', file);
        }

        // Effectuez une requête POST à l'API
    await PostAnimal(formData);
        // Fermez la boîte de dialogue et actualisez la page
    setOpen(false);
    router.refresh()
      } else {
        // Affichez une alerte si tous les champs ne sont pas remplis
        alert("Veuillez remplir tous les champs")
      }
    }

  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    //filter
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    //sorting
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    //pagination
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

    <div className="flex flex-col w-full ">
    <div className="flex justify-between">
      <div className="flex py-2">
        {/* Champ de filtrage par nom */}
        <Input
          placeholder="Filtrer par titre..."
          value={(table.getColumn("nom")?.getFilterValue()) ?? ""}
          onChange={(event) =>
            table.getColumn("nom")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="p-2 bg">
        {/* Boîte de dialogue pour ajouter un animal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="text-[#ffffff] bg-[#222222] hover:bg-[#28ccac] hover:text-[#ffffff]" variant="outline">Ajouter</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Nouvelle animal</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="titre" className="text-right">
                  Nom
                </Label>
                <Input
                  id="nom"
                  defaultValue="Nom de l'animal"
                  onChange={(event) => setNom(event.target.value)}
                  className="col-span-3"
                />
              </div>
              {/* // Date de naissance */}

              

              {/* //desc */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="descr" className="text-right">
                  description courte
                </Label>
                <Textarea
                  id="descrshort"
                  defaultValue="Petite description de l'animmal"
                  onChange={(event) => setDescrShort(event.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="descr" className="text-right">
                  description
                </Label>
                <Textarea
                  id="descr"
                  defaultValue="Description de l'animal"
                  onChange={(event) => setDescr(event.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                {/* Catégorie pour l'actualité */}
                <Label htmlFor="sexe" className="text-right">
                  Sexe
                </Label>
                <select
                    className="flex h-10 w-[275px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    onChange={(event) => setSexeId(event.target.value)}
                    value={SexeId || ""}
                  >
                    <option selected>Choisissez un sexe</option>
                    {sexe.map((s) => (
                      <option key={s.id} value={s.id}>{s.nom}</option>
                    ))}
                  </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                {/* Catégorie pour l'actualité */}
                <Label htmlFor="categorie" className="text-right">
                  Categorie
                </Label>
                <select
                    className="flex h-10 w-[275px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    onChange={(event) => setCategorieId(event.target.value)}
                    value={CategorieId || ""}
                  >
                    <option selected>Choisissez une catégorie</option>
                    {categorie.map((c) => (
                      <option key={c.id} value={c.id}>{c.nom}</option>
                    ))}
                  </select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                {/* Catégorie pour l'actualité */}
                <Label htmlFor="sexe" className="text-right">
                  Race
                </Label>
                <select
                    className="flex h-10 w-[275px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    onChange={(event) => setRaceId(event.target.value)}
                    value={RaceId || ""}
                  >
                    <option selected>Choisissez une Race</option>
                    {race.map((r) => (
                      <option key={r.id} value={r.id}>{r.nom}</option>
                    ))}
                  </select>
              </div>

              {/* crée l'image */}
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Images</Label>
                <Input id="picture" type="file" multiple onChange={uploadImage} />
                {images.length > 0 && (
                  <div>
                    Images sélectionnées:
                    <ul>
                      {images.map((image, index) => (
                        <li key={index}>{image.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
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
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

    </div>
   
    <div className="flex items-center justify-center px-2 mt-2 text-[#121417]">
      
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">items par page</p>
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
              {[5,10,15, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
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
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
    
    </div>
    
  )
}
