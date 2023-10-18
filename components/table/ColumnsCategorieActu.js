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
    cell: ({row}) => {
      const catActu = row.original
      const catActuName = catActu.nom
      const catActuId = catActu.id.toString()
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button varian='ghost'className="h-8 w-8 p-0 bg-slate-100 hover:bg-slate-200">
             <MoreHorizontal className="h-4 w-4 text-gray-700" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <DropdownMenuLabel>action</DropdownMenuLabel>
          <DropdownMenuItem
          onClick={()=>{
            navigator.clipboard.writeText(catActuName.toString())
          }}
          >
            copy animal name
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/admin/modif/animal/${catActuId}`}>Modifier</Link>
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
  
  
]
