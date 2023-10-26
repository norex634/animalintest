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
      cell: ({row}) => {
        const categorieRow = row.original
        const categorieName = categorieRow.nom
        
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button varian='ghost'className="h-8 w-8 p-0 bg-[#222222] text-[#ffffff] hover:bg-[#28ccac]">
               <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
            <button
              onClick={()=>{
                navigator.clipboard.writeText(categorieRow.nom)
              }}
              className="h-10 w-full p-0 hover:bg-[#28ccac] hover:text-white" 
              variant="ghost">
              copier email 
            </button>
            <button
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
