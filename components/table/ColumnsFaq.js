"use client"
import React, { useState,useEffect } from "react"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {GetFetchFaqs, PatchFaq, DeleteFaq} from "@/utils/fetch/Faq"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"

function CellComponent({ row }) {
  const faqRow = row.original
  const faqQuestion = faqRow.question
  const faqId = faqRow.id
  const [isOpenFaq, setIsOpenFaq] = useState(false)
  const [faq, setFaq] = useState([])
  const [question, setQuestion] = React.useState("Question de la FAQ");
  const [reponse, setReponse] = React.useState("Réponse de la FAQ");
  const [link, setLink] = React.useState("Link de la FAQ");
  const router = useRouter()
  const faqs = async () => {
    setFaq(await GetFetchFaqs())
  }
  const buttonClick = async () => {
    await faqs()
    setIsOpenFaq(true)
  }

  const ondelete = async () => {
    await DeleteFaq(faqId);
    router.refresh();
  }

   // Fonction pour gérer le clic sur le bouton "Ajouter"
   async function onsubmit() {
    if (question && reponse && link && faqId) {
      // Créez un objet data avec les valeurs du formulaire
      const data = { question: question, reponse: reponse, link: link, faqId: faqId }
      // Effectuez une requête POST à l'API
      
      await PatchFaq(data);
      // Fermez la boîte de dialogue et actualisez la page
      
      setIsOpenFaq(false);
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
        <Button varian='ghost'className="h-8 w-8 p-0 bg-[#222222] text-[#ffffff] hover:bg-[#28ccac]">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        

        <button
          onClick={()=>{
            navigator.clipboard.writeText(faqRow.link)
          }}
          className=" mb-2 h-10 w-full p-0 hover:bg-[#28ccac] hover:text-white" 
          variant="ghost">
          copier le lien 
        </button>

        <Dialog >
  <DialogTrigger asChild>
    <button 
      onClick={buttonClick}
      className="h-10 w-full p-0 hover:bg-[#28ccac] hover:text-white" 
      variant="ghost">
      Modifier la FAQ
    </button>
  </DialogTrigger>
  {isOpenFaq && (
    <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit FAQ</DialogTitle>
      <DialogDescription>
        Modiffier la FAQ ici.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Question
        </Label>
        <Textarea
          id="name"
          defaultValue={faqRow.question}
          onChange={(event) => setQuestion(event.target.value)}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          Réponse
        </Label>
        <Textarea
          id="username"
          defaultValue={faqRow.reponse}
          onChange={(event) => setReponse(event.target.value)}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          Link
        </Label>
        <Input
          id="username"
          defaultValue={faqRow.link}
          onChange={(event) => setLink(event.target.value)}
          className="col-span-3"
        />
      </div>
      
    </div>
    <DialogFooter>
      <Button onClick={onsubmit} type="submit">Save changes</Button>
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
  )
}

export const Columns = [
  {
    accessorKey: "question",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Question
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const question = row.original.question;
      const truncatedQuestion = question.length > 70 ? question.slice(0, 70) + "..." : question;

      return <span>{truncatedQuestion}</span>;
    },
  },

  {
    accessorKey: "reponse",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Reponse
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const reponse = row.original.reponse;
      const truncatedReponse = reponse.length > 70 ? reponse.slice(0, 70) + "..." : reponse;

      return <span>{truncatedReponse}</span>;
    },
  },

  {
    accessorKey: "link",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Link
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
