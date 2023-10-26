"use client"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export const columns = [
  {
    accessorKey: "categorie.nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
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
    accessorKey: "race.nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Race
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "descrShort",
    header: "descr short",
  },
  {
    id: "action",
    cell: ({row}) => {
      const animalRow = row.original
      const animalName = animalRow.nom
      const animalId = animalRow.id.toString()
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button varian='ghost'className="h-8 w-8 p-0 bg-[#222222] text-[#ffffff] hover:bg-[#28ccac] ">
             <MoreHorizontal className="h-4 w-4 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <button
              onClick={()=>{
                navigator.clipboard.writeText(animalRow.nom)
              }}
              className=" h-10 w-full p-0 hover:bg-[#28ccac] hover:text-white" 
              variant="ghost">
              copier nom 
            </button>
            <button
              onClick={()=>{
                navigator.clipboard.writeText(animalRow.nom)
              }}
              className=" h-10 w-full p-0 hover:bg-[#28ccac] hover:text-white" 
              variant="ghost">
              Modifier 
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
