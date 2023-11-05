"use client"
import React, { useState,useEffect } from "react"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {GetFetchUsers,PatchUser} from "@/utils/fetch/User"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
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
import { Input } from "@/components/ui/input"

function CellComponent({ row }) {
  const userRow = row.original
      const userName = userRow.nom
      const userId = userRow.id
      const [user, setUser] = useState([])
      const [isOpenUser, setIsOpenUser] = useState(false)
      const [nom, setNom] = React.useState("Nom de l'admin");
      const [prenom, setPrenom] = React.useState("Prenom de l'admin");
      const [email, setEmail] = React.useState("Email de l'admin");
      const [role, setRole] = React.useState("Role de l'admin");
      const router = useRouter()
      const users = async () => {
        setUser(await GetFetchUsers())
      }
      const buttonClick = async () => {
        await users()
        setIsOpenUser(true)
      }
      // Fonction pour gérer le clic sur le bouton "Ajouter"
      async function onsubmit() {
        if (nom && prenom && email && role && userId) {
          role.toString()
          // Créez un objet data avec les valeurs du formulaire
          const data = { nom: nom, prenom: prenom, email: email, role: role, userId: userId }
          // Effectuez une requête POST à l'API
          
          await PatchUser(data);
          // Fermez la boîte de dialogue et actualisez la page
          
          setIsOpenUser(false);
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
            <Button varian='ghost' className="h-8 w-8 p-0 bg-[#222222] text-[#ffffff] hover:bg-[#28ccac]">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            

            <button
              onClick={()=>{
                navigator.clipboard.writeText(userRow.email)
              }}
              className=" mb-2 h-10 w-full p-0 hover:bg-[#28ccac] hover:text-white" 
              variant="ghost">
              copier email 
            </button>

            <Dialog >
      <DialogTrigger asChild>
        <button 
          onClick={buttonClick}
          className="h-10 w-full p-0  hover:bg-[#28ccac] hover:text-white" 
          variant="ghost">
          Edit User
        </button>
      </DialogTrigger>
      {isOpenUser && (
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>
            Modiffier L`&apos;`user ici.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nom
            </Label>
            <Input
              id="name"
              defaultValue={userRow.nom}
              onChange={(event) => setNom(event.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Prenom
            </Label>
            <Input
              id="prenom"
              defaultValue={userRow.prenom}
              onChange={(event) => setPrenom(event.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              id="Email"
              defaultValue={userRow.email}
              onChange={(event) => setEmail(event.target.value)}
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
                  {/* Catégorie pour l'actualité */}
                  <Label htmlFor="descr" className="text-right">
                    Role
                  </Label>
                  <select
                    className="flex h-10 w-[275px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    onChange={(event) => setRole(event.target.value)}
                    defaultValue={userRow.role}
                  >
                  <option key="1" value="ADMIN">ROLE ADMIN</option>
                  <option key="3" value="USER">ROLE USER</option>
                    
                  </select>
                </div>
        </div>
        <DialogFooter>
          <Button onClick={onsubmit} type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
      )}
      
    </Dialog>

          </DropdownMenuContent>
        </DropdownMenu>
      </>
      )
}

// This type is used to define the shape of our data.
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
    accessorKey: "prenom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Prenom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },

  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: "action",
    cell: CellComponent,
  }
]
