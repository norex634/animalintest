"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import * as React from "react"


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
import { useRouter } from "next/navigation"
import { PostUser } from "@/utils/fetch/User"




export function DataTable({
  columns,
  data,
  pageval,
  
}) {
  //filter
  const [columnFilters, setColumnFilters] = React.useState([])
  const [sorting, setSorting] = React.useState([])

  // État local pour les champs de titre, de texte et de catégorie
  const [nom, setNom] = React.useState("Le nom de l'admin");
  const [prenom, setPrenom] = React.useState("Le prenom de l'admin");
  const [email, setEmail] = React.useState("L'email de l'admin");
  const [password, setPassword] = React.useState("Le password de l'admin");
  

  const [open, setOpen] = React.useState(false);
  const router = useRouter()

    // Fonction pour gérer le clic sur le bouton "Ajouter"
    async function buttonClick() {
      if (nom) {
        // Créez un objet data avec les valeurs du formulaire
        const data = { nom: nom, prenom:prenom, email:email, password:password}
        // Effectuez une requête POST à l'API
        console.log(data)
        await PostUser(data);
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
  console.log(pageval)

  return (

    <div className="flex flex-col w-full">
      <div className="flex justify-between">
      <div className="flex pt-2">
          {/* Champ de filtrage par nom */}
          <Input
            placeholder="Filtrer par email..."
            value={(table.getColumn("email")?.getFilterValue()) ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
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
                <DialogTitle>Nouvelle admin</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="titre" className="text-right">
                    Nom
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Le nom de l'admin"
                    onChange={(event) => setNom(event.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="titre" className="text-right">
                    Prenom
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Le prenom de l'admin"
                    onChange={(event) => setPrenom(event.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="titre" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="name"
                    defaultValue="L'email de l'admin"
                    onChange={(event) => setEmail(event.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="titre" className="text-right">
                    Password
                  </Label>
                  <Input
                    type='password'
                    id="name"
                    defaultValue=""
                    onChange={(event) => setPassword(event.target.value)}
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
