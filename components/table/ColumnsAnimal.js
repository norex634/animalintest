"use client"
import React, {useState,useEffect} from "react"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import Link from "next/link"
// date 
import { format, set } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { GetFetchCategorieAnimaux } from "@/utils/fetch/CategorieAnimal";
import { GetFetchRaces } from "@/utils/fetch/Race"
import { GetFetchSexes } from "@/utils/fetch/Sexe"
import { PatchAnimal,DeleteAnimal } from "@/utils/fetch/Animal"
import { GetFetchImages,DeleteImage,PostImages } from "@/utils/fetch/Image"
import Image from "next/image"


function CellComponent({ row }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenImg, setIsOpenImg] = useState(false);
  const animalRow = row.original;
  const animalName = animalRow.nom.toString();
  const animalNaissance = animalRow.naissance;
  const animalId = animalRow.id;
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState([animalRow.categorie.id]);
  const [race, setRace] = useState([]);
  const [selectedRace, setSelectedRace] = useState([animalRow.race.id]);
  const [sexe, setSexe] = useState([]);
  const [selectedSexe, setSelectedSexe] = useState([animalRow.sexe.id]);
  const [nom, setNom] = useState("Nom de l'animal");
  const [naissance, setNaissance] = useState();
  const [descrShort, setDescrShort] = useState("description courte de l'animal");
  const [descr, setDescr] = useState("description de l'animal");
  const [image,setImage] = useState([]);
  const router = useRouter();
  const [imgToSup,setImgToSup] = useState([]);

  const types = async () => {
    // console.log("1")
    setType(await GetFetchCategorieAnimaux());
  };
  
  const races = async () => {
    setRace(await GetFetchRaces());
  };
  
  const sexes = async () => {
    setSexe(await GetFetchSexes());
  };

  const images = async () => {
    setImage(await GetFetchImages(animalId));
  };

  const buttonClick = async () => {
    await types();
    await races();
    await sexes();
    setIsOpen(true);
  };

  const buttonClickImg = async () => {
    await images();
    setIsOpenImg(true);
  };

  const ondelete = async () => {
    await DeleteAnimal(animalId);
    router.refresh();
  }

  async function onsubmit() {
    if (nom && descrShort && descr && selectedType && selectedRace && selectedSexe) {
      
      const data = { nom: nom, naissance: naissance, animalNaissance:animalNaissance, descrShort: descrShort, descr: descr, selectedType:selectedType,selectedRace:selectedRace,selectedSexe:selectedSexe, animalId:animalId };
      console.log(naissance)
      await PatchAnimal(data);
      setIsOpen(false);
      router.refresh();
    } else {
      alert("Veuillez remplir tous les champs");
    }
  }

  async function onSubmitSup(imgToSup) {
    
    // const imgId = img.id;
    // on delete l'image de la bdd
    DeleteImage(imgToSup);
    // setIsOpenImg(false);
    // router.refresh();
  
}

  //fonction pour upload multiple image
  const [addImages, setAddImages] = React.useState([])
  const uploadImage = async e => {
    const formData = new FormData()
    const files = Array.from(e.target.files)
    setAddImages(files)
    // pour chaque image on l'ajoute a cloudinary et puis a la db 
    files.forEach(async (file) => {
      formData.append('files', file);
    })
    formData.append('animalId', animalId);
    await PostImages(formData);
    setIsOpenImg(false);
    router.refresh();
  }

  return (
    <>
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 bg-[#222222] text-[#ffffff] hover:bg-[#28ccac]">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <button
            onClick={() => {
              navigator.clipboard.writeText(animalName);
            }}
            className="mb-2 h-10 w-full p-0 hover:bg-[#28ccac] hover:text-white"
            variant="ghost"
          >
            copier nom
          </button>
          <Dialog>
            <DialogTrigger asChild>
              <button
                onClick={buttonClick}
                className="h-10 w-full p-0 hover:bg-[#28ccac] hover:text-white"
                variant="ghost"
              >
                Edit animal
              </button>
            </DialogTrigger>
            {isOpen && (
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Animal</DialogTitle>
                  <DialogDescription>Modifier l&apos;animal ici.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Nom
                    </Label>
                    <Input
                      id="name"
                      defaultValue={animalName}
                      onChange={(event) => setNom(event.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="descrShort" className="text-right">
                      description courte
                    </Label>
                    <Textarea
                      id="descrShort"
                      defaultValue={animalRow.descrShort}
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
                      defaultValue={animalRow.descr}
                      onChange={(event) => setDescr(event.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  {/* Date */}
                  <div className="flex justify-end">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !naissance && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {naissance ? format(naissance, "PPP") : <span>Date de naissance</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={naissance}
                        onSelect={setNaissance}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  </div>
                  {/* Type */}
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="type" className="text-right">
                      Type
                    </Label>
                    <select
                      className="flex h-10 w-[275px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      onChange={(event) => setSelectedType(event.target.value)}
                      defaultValue={animalRow.categorie.id}
                    >
                      {type.categoriesAnimaux.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.nom}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Race */}
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="type" className="text-right">
                      Race
                    </Label>
                    <select
                      className="flex h-10 w-[275px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      onChange={(event) => setSelectedRace(event.target.value)}
                      defaultValue={animalRow.race.id}
                    >
                      {race.races.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.nom}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* sexe */}
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="type" className="text-right">
                      Sexe
                    </Label>
                    <select
                      className="flex h-10 w-[275px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      onChange={(event) => setSelectedSexe(event.target.value)}
                      defaultValue={animalRow.sexe.id}
                    >
                      {sexe.sexes.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.nom}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={onsubmit} type="submit">
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            )}
          </Dialog>
          {/* supp img */}
          <Dialog>
            <DialogTrigger asChild>
              <button
                onClick={buttonClickImg}
                className="h-10 w-full p-0 hover:bg-[#28ccac] hover:text-white"
                variant="ghost"
              >
                Edit images
              </button>
            </DialogTrigger>
            {isOpenImg && (
              <>
              <DialogContent className="sm:max-w-[425px] min-w-[70%]">
              <Tabs defaultValue="AjouterImage" className="w-[400px] min-w-[100%] mt-4 border-transparent">
                <TabsList className="grid w-full grid-cols-2 ">
                  <TabsTrigger className="data-[state=active]:bg-ac data-[state=active]:text-txt " value="AjouterImage">Ajouter Image</TabsTrigger>
                  <TabsTrigger className="data-[state=active]:bg-ac data-[state=active]:text-txt " value="suprimerImage">Supprimer Image</TabsTrigger>
                </TabsList>
                {/* Ajouter Image */}
                <TabsContent className="" value="AjouterImage">
                  <Card>
                    <CardHeader >
                      <CardTitle className="text-center">Ajouter des images</CardTitle>
                      <CardDescription>
                        Ajoutez des images de l&apos;animal ici.
                      </CardDescription>
                    </CardHeader>
                    <ScrollArea className="h-[60vh] w-[100%] rounded-md border-none p-4">
                    <div className="grid grid-cols-8 gap-4 py-4 min-h-[100%]">
                    {image.images.map((img) => (
                      <div key={img.id} className="flex flex-col gap-4 items-center ">
                      <Image className="h-[200px] w-[200px] object-cover" src={img.img} width={400} height={400} alt="héhé"/>
                      
                      </div>
                    ))}
                    <label for="picture" class="bg-ac hover:bg-ac/80 text-white font-bold py-2 px-4 rounded cursor-pointer h-full flex items-center justify-center">
                      Ajoutez ici
                      <input id="picture" type="file" multiple onChange={uploadImage} class="hidden" />
                    </label>
                    
                      </div>
                    </ScrollArea>
                    
                  </Card>
                </TabsContent>
                {/* Supprimer Image */}
                <TabsContent className=""  value="suprimerImage">
                  <Card className="">
                    <CardHeader>
                      <CardTitle className="text-center">Supprimer des images</CardTitle>
                      <CardDescription>
                      Supprimer des images de l&apos;animal ici.
                      </CardDescription>
                    </CardHeader>
                    <ScrollArea className="h-[60vh] w-[100%] rounded-md border-none p-4">
                    <div className="grid grid-cols-8 gap-4 py-4 min-h-[100%]">
                    {image.images.map((img) => (
                      <div key={img.id} className="flex flex-col gap-4 items-center ">
                      <Image className="h-[200px] w-[200px] object-cover" src={img.img} width={400} height={400} alt="héhé"/>
                        <Checkbox 
                          onCheckedChange={() => {
                            // Vérifie si l'image est déjà présente dans imgToSup
                            const imageIndex = imgToSup.findIndex((selectedImage) => selectedImage.id === img.id);
                            
                            if (imageIndex !== -1) {
                              // Si l'image est déjà sélectionnée, supprimez-la du tableau
                              setImgToSup((prevImgToSup) => {
                                const newImgToSup = [...prevImgToSup];
                                newImgToSup.splice(imageIndex, 1);
                                return newImgToSup;
                              });
                            } else {
                              // Sinon, ajoutez l'image au tableau
                              setImgToSup((prevImgToSup) => [...prevImgToSup, img]);
                            }
                        }} id="terms" />
                      </div>
                    ))}
                      </div>
                    </ScrollArea>
                    
                    <CardFooter className="justify-center">
                      <Button onClick={()=> onSubmitSup(imgToSup)}>Supprimer images selectioné</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
              </DialogContent>

              
            </>
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
    cell:CellComponent,
  }
]
