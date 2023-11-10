'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {GetFetchAnimaux} from "@/utils/fetch/Animal"
import { useRouter,usePathname,useSearchParams } from 'next/navigation'

const MoreAnimals = async (
    page,
    limit
) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    async function loadMoreAnimaux() {
        
        const next = page + 1 
        const newSearchParams = new URLSearchParams(searchParams.toString());
        const newAnimaux = await GetFetchAnimaux({page: next, limit: limit})
        if(newAnimaux.animaux.length > 0){
            setAnimaux([...animaux, ...newAnimaux.animaux])
            setPage(next)
            newSearchParams.set('page', next);
        }
    }

  return (
    <>
    <Button className='bg-ac mt-2 w-[25%]' onClick={loadMoreAnimaux}>
                More animals
    </Button>
    </>
  )
}

export default MoreAnimals