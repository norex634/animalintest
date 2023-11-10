'use client'
import React, {useState} from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { PatchCompagnie1 } from '@/utils/fetch/Compagnie'

const CompagnieForm = ({data}) => {
    const compagnie = data.compagnie
    const compagnieId = compagnie.id
    const [nom, setNom] = useState(compagnie.nom)
    const [slogan, setSlogan] = useState(compagnie.slogan)
    const [tel, setTel] = useState(compagnie.tel)
    const [lieu, setLieu] = useState(compagnie.lieu)
    const [email, setEmail] = useState(compagnie.email)
    const router = useRouter()
   // Fonction pour gérer les changements du champ "Nom"
  const handleNomChange = (event) => {
    setNom(event.target.value);
  };
  // Fonction pour gérer les changements du champ "Nom"
  const handleSloganChange = (event) => {
    setSlogan(event.target.value);
  };
  // Fonction pour gérer les changements du champ "Nom"
  const handleTelChange = (event) => {
    setTel(event.target.value);
  };
  // Fonction pour gérer les changements du champ "Nom"
  const handleLieuChange = (event) => {
    setLieu(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSaveClick = async () => {
    if (nom && slogan && tel && lieu && email) {
        const data = { nom: nom, slogan: slogan, tel: tel, lieu: lieu, email:email, compagnieId:compagnieId };

        await PatchCompagnie1(data);
        router.refresh();
      } else {
        alert("Veuillez remplir tous les champs");
      }
  }

  return (
    <>
    
    <div className="flex flex-col w-[100%]">
        <div className="grid w-full  items-center gap-1.5 pt-4">
            <Label htmlFor="nom">Nom</Label>
            <Input key={compagnie.nom} type="text" id="nom" placeholder={compagnie.nom} defaultValue={compagnie.nom} onChange={handleNomChange} />
        </div>
        <div className="grid w-full  items-center gap-1.5 pt-4">
            <Label htmlFor="Slogan">Slogan </Label>
            <Input key={compagnie.slogan} type="text" id="Slogan" placeholder={compagnie.slogan} defaultValue={compagnie.nom} onChange={handleSloganChange} />
        </div>
        <div className="grid w-full  items-center gap-1.5 pt-4">
            <Label htmlFor="tel ">Tel </Label>
            <Input key={compagnie.tel} type="text" id="tel " placeholder={compagnie.tel} defaultValue={compagnie.tel} onChange={handleTelChange} />
        </div>
        <div className="grid w-full  items-center gap-1.5 pt-4">
            <Label htmlFor="lieu">lieu </Label>
            <Input  key={compagnie.lieu} type="text" id="lieu " placeholder={compagnie.lieu} defaultValue={compagnie.lieu} onChange={handleLieuChange} />
        </div>
        <div className="grid w-full  items-center gap-1.5 pt-4">
            <Label htmlFor="Email">Email</Label>
            <Input  key={compagnie.email} type="email" id="email" placeholder={compagnie.email} defaultValue={compagnie.email}  onChange={handleEmailChange}/>
        </div>
        <div className="grid w-full  items-center gap-1.5 pt-4">
            <Button onClick={handleSaveClick} >Sauvgarder</Button>
        </div>
        
    </div>
    </>
  )
}

export default CompagnieForm