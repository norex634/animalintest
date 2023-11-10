"use client"

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBuilding, faHouse, faPaw,faShieldCat, faShieldDog, faList, faHouseMedicalCircleCheck, faTableList, faVenusMars, faQuestion, faShareNodes, faEllipsisVertical, faUsers} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faClock, faNewspaper } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import {signOut} from 'next-auth/react';


import { ChevronDownIcon } from "@radix-ui/react-icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { PatchUserLogged } from "@/utils/fetch/User"


function SideAdmin({session}) {
  const userLogged = session.user
  const [toggleCompagnie, setToggleCompagnie] = useState(false)
  const [toggleAnimal, setToggleAnimal] = useState(false)
  const [toggleActu, setToggleActu] = useState(false)
  const [isOpenUserModif, setIsOpenUserModif] = useState(false)
  const [nom, setNom] = React.useState(`${userLogged.nom}`);
  const [prenom, setPrenom] = React.useState(`${userLogged.prenom}`);
  // const [email, setEmail] = React.useState("Email de l'admin");
  const [password, setPassword] = React.useState("Password de l'admin");
  const [newPassword, setNewPassword] = React.useState("Password de l'admin");
  const router = useRouter()


  

    const handleLogout = async () => {
      await signOut();
    };

    const onsubmitUserModif = async (event) => {
      const userId = userLogged.id
      if(nom && prenom && password && newPassword){
        const data = { nom: nom, prenom: prenom, password: password, newPassword: newPassword, userId:userId }
        await PatchUserLogged(data);
        setIsOpenUserModif(false);
        router.refresh()
      }else {
        // Affichez une alerte si tous les champs ne sont pas remplis
        alert("Veuillez remplir tous les champs")
      }
    }
  
  
  return (

<div className="h-[96vh] w-full p-2 bg-[#ffffff] text-[#222222] rounded-[10px] flex flex-col justify-between shadow-lg ">
  <div className="flex flex-col ">
    <h1 className="text-[1.5em] font-semibold mb-2 text-center">Dashboard</h1>
    <ul className='flex flex-col gap-4 text-[#222222]'>
      {/* HOME */}                 
      <li className="rounded-[20px] border border-transparent hover:border-[#28ccac] ">
        <Link href="/" className="flex items-center p-2 space-x-3 rounded-md">
        <FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#28ccac",}} />
        <span className="">Home</span>
        </Link>
      </li>
      {/* DROP COMPAGNIE */}
      <li className="rounded-[50px] group ">
        <div className="flex items-center p-2 space-x-3 rounded-[20px] border border-transparent hover:border-[#28ccac]">
          <FontAwesomeIcon icon={faBuilding} size="lg" style={{color: "#28ccac",}} />
            <button onClick={() => setToggleCompagnie(!toggleCompagnie)} className="">Compagnie</button>
              </div>
                {toggleCompagnie && (
                  <ul className=' flex flex-col gap-2 pl-6'>
                    <li className=" mt-2 rounded-[20px] border border-transparent hover:border-[#28ccac]">
                      <Link href="/admin/compagnie" className="flex items-center p-2 space-x-3 rounded-md mt-1">
                      <FontAwesomeIcon icon={faHouseMedicalCircleCheck} size="lg" style={{color: "#28ccac",}} />
                      <span className="">Info</span>
                      </Link>
                    </li>

                    <li className="rounded-[20px] border border-transparent hover:border-[#28ccac]">
                      <Link href="/admin/faq" className="flex items-center p-2 space-x-3 rounded-md">
                      <FontAwesomeIcon icon={faQuestion} size="lg" style={{color: "#28ccac",}} />
                      <span className="">Faq</span>
                      </Link>
                    </li>

                    <li className="rounded-[20px] border border-transparent hover:border-[#28ccac]">
                      <Link href="/admin/users" className="flex items-center p-2 space-x-3 rounded-md">
                      <FontAwesomeIcon icon={faUsers} size="lg" style={{color: "#28ccac",}} />
                      <span className="text-[#222222]">Users</span>
                      </Link>
                    </li>
                  </ul>
                )}
        </li>
        <li className="rounded-[20px] border border-transparent hover:border-[#28ccac]">
          <Link href="/admin/animal" className="flex items-center p-2 space-x-3 rounded-md">
          <FontAwesomeIcon icon={faPaw} size="lg" style={{color: "#28ccac",}} />
          <span className="">Animaux</span>
          </Link>
        </li>
        <li className="rounded-[20px] group border border-transparent hover:border-[#28ccac]">
          <Link href="/admin/actu" className="flex items-center p-2 space-x-3 rounded-md">
          <FontAwesomeIcon icon={faNewspaper} size="lg" style={{color: "#28ccac",}} />
          <span className=" ">Actu</span>
          </Link>
        </li>
    </ul>
  </div>
  
   <Card className="bg-[#ffffff] border-[#222222] shadow-lg w-full">
      <CardContent className="grid gap-6 p-2">
        <div className="flex items-center justify-between space-x-2">
            <div className='flex flex-col '>
              <p className="text-lg font-medium leading-none text-[#222222] underline decoration-[#28ccac]">{userLogged.nom}</p>
            </div>
            
            <DropdownMenu >
              <DropdownMenuTrigger className="w-[20%] rounded text-[#222222] text-[1.5em] bg-[#ffffff]   hover:border-[#28ccac] hover:bg-[#28ccac] hover:text-[#ffffff]" >
                  <FontAwesomeIcon icon={faEllipsisVertical} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{(userLogged.role).toUpperCase()} {(userLogged.nom).toUpperCase()}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <button
                onClick={handleLogout }
                  className=" mb-2 h-10 w-full p-0 hover:bg-[#28ccac] hover:text-white" 
                  variant="ghost">
                  Déconnexion
                </button>

                <Dialog>
      <DialogTrigger asChild>
        <button
          onClick={() => setIsOpenUserModif(true)}
          className=" h-10 w-full p-0 hover:bg-[#28ccac] hover:text-white" 
          variant="ghost">
            mot de passe
        </button>
      </DialogTrigger>
      {isOpenUserModif && (
        <DialogContent className="sm:max-w-[425px] min-w-[30%]">
        <DialogHeader>
          <DialogTitle>Modification de {userLogged.nom} {userLogged.prenom}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nom
            </Label>
            <Input
              id="name"
              defaultValue={userLogged.nom}
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
              defaultValue={userLogged.prenom}
              onChange={(event) => setPrenom(event.target.value)}
              className="col-span-3"
            />
          </div>
          
          {/* password  */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              mot de passe actuelle
            </Label>
            <Input
              type="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nouveau mot de passe
            </Label>
            <Input
              type="password"
              id="newpassword"
              onChange={(event) => setNewPassword(event.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onsubmitUserModif} type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
      )}
      
    </Dialog>
                
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </CardContent>
    </Card>
</div>



    
  )
}

export default SideAdmin

