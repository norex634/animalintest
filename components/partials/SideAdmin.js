"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faHouse, faPaw,faShieldCat, faShieldDog, faList, faHouseMedicalCircleCheck, faTableList, faVenusMars, faQuestion, faShareNodes, faEllipsisVertical, faUsers} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faClock, faNewspaper } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'


function SideAdmin() {
  const [toggleCompagnie, setToggleCompagnie] = useState(false)
  const [toggleAnimal, setToggleAnimal] = useState(false)
  const [toggleActu, setToggleActu] = useState(false)
  return (
    
    <div className="flex">
      <div className="flex flex-col h-full p-3 bg-gray-800 shadow">
        <div className="space-y-3">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-white">Dashboard Animalin</h2>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center py-4">
                <button type="submit" className="p-2 focus:outline-none focus:ring">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                </button>
              </span>
                <input
                  type="search"
                  name="Search"
                  placeholder="Nom de l'animal"
                  className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                />
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">

              {/* HOME */}
                <li className="rounded-sm">
                  <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  <FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#ffffff",}} />
                    <span className="text-gray-100">Home</span>
                  </a>
                </li>


              {/* DROP COMPAGNIE */}
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                  <FontAwesomeIcon icon={faBuilding} size="lg" style={{color: "#ffffff",}} />
                    <button onClick={() => setToggleCompagnie(!toggleCompagnie)} className="text-gray-100">Compagnie</button>
                  </div>
                    {toggleCompagnie && (
                      <ul className='pl-6'>
                        <li className="rounded-sm">
                          <Link href="/admin/compagnie" className="flex items-center p-2 space-x-3 rounded-md">
                          <FontAwesomeIcon icon={faHouseMedicalCircleCheck} size="lg" style={{color: "#ffffff",}} />
                          <span className="text-gray-100">Info</span>
                          </Link>
                        </li>

                        {/* <li className="rounded-sm">
                          <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                          <FontAwesomeIcon icon={faClock} size="lg" style={{color: "#ffffff",}} />
                          <span className="text-gray-100">Horaire</span>
                          </a>
                        </li>

                        <li className="rounded-sm">
                          <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                          <FontAwesomeIcon icon={faShareNodes} size="lg" style={{color: "#ffffff",}} />
                          <span className="text-gray-100">Social</span>
                          </a>
                        </li> */}

                        <li className="rounded-sm">
                          <Link href="/admin/faq" className="flex items-center p-2 space-x-3 rounded-md">
                          <FontAwesomeIcon icon={faQuestion} size="lg" style={{color: "#ffffff",}} />
                            <span className="text-gray-100">Faq</span>
                          </Link>
                        </li>

                        <li className="rounded-sm">
                          <Link href="/admin/users" className="flex items-center p-2 space-x-3 rounded-md">
                          <FontAwesomeIcon icon={faUsers} size="lg" style={{color: "#ffffff",}} />
                            <span className="text-gray-100">Users</span>
                          </Link>
                        </li>
                      </ul>
                    )
                  }
                </li>
                



                  {/* ANIMAL DROPDOWN */}
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                  <FontAwesomeIcon icon={faPaw} size="lg" style={{color: "#ffffff",}} />
                    <button onClick={() => setToggleAnimal(!toggleAnimal)} className="text-gray-100">animal</button>
                  </div>
                {toggleAnimal && (
                  <ul className='pl-6'>
                    <li className="rounded-sm">
                      <Link href="/admin/animal" className="flex items-center p-2 space-x-3 rounded-md">
                      <FontAwesomeIcon icon={faList} size="lg" style={{color: "#ffffff",}} />
                      <span className="text-gray-100">Tous les animaux</span>
                      </Link>
                    </li>

                    {/* <li className="rounded-sm">
                      <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                      <FontAwesomeIcon icon={faVenusMars} size="lg" style={{color: "#ffffff",}} />
                        <span className="text-gray-100">Genre</span>
                      </a>
                    </li>

                    <li className="rounded-sm">
                      <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                      <FontAwesomeIcon icon={faTableList} size="lg" style={{color: "#ffffff",}} />
                        <span className="text-gray-100">Categorie</span>
                      </a>
                    </li> */}

                    {/* <li className="rounded-sm">
                      <Link href="/admin/chiens" className="flex items-center p-2 space-x-3 rounded-md">
                      <FontAwesomeIcon icon={faShieldDog} size="lg" style={{color: "#ffffff",}} />
                        <span className="text-gray-100">Chiens</span>
                      </Link>
                    </li>

                    <li className="rounded-sm">
                      <Link href="/admin/chats" className="flex items-center p-2 space-x-3 rounded-md">
                      <FontAwesomeIcon icon={faShieldCat} size="lg" style={{color: "#ffffff",}} />
                        <span className="text-gray-100">Chats</span>
                      </Link>
                    </li> */}
                  </ul>
                )}
                </li>


                <ul className=''>
                      <li className="rounded-sm">
                        <Link href="/admin/actu" className="flex items-center p-2 space-x-3 rounded-md">
                        <FontAwesomeIcon icon={faNewspaper} size="lg" style={{color: "#ffffff",}} />
                        <span className="text-gray-100">Actu</span>
                        </Link>
                      </li>
                    </ul>

                  {/* Actu dropdown */}
                {/* <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                  <FontAwesomeIcon icon={faNewspaper} size="lg" style={{color: "#ffffff",}} />
                    <button onClick={()=>setToggleActu(!toggleActu)} className="text-gray-100">Actu</button>
                  </div>

                  {toggleActu && (
                    <ul className='pl-6'>
                      <li className="rounded-sm">
                        <Link href="/admin/actu" className="flex items-center p-2 space-x-3 rounded-md">
                        <FontAwesomeIcon icon={faList} size="lg" style={{color: "#ffffff",}} />
                        <span className="text-gray-100">Toutes les actu</span>
                        </Link>
                      </li>

                      <li className="rounded-sm">
                        <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                        <FontAwesomeIcon icon={faEllipsisVertical} size="lg" style={{color: "#ffffff",}} />
                        <span className="text-gray-100">categorie</span>
                        </a>
                      </li>
                    </ul>
                    )}
                </li> */}

              </ul>
          </div>
        </div>
        
      </div>
    </div>
</div>



    
  )
}

export default SideAdmin

