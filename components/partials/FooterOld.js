import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import axios from 'axios'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Footer() {

  return (
   <div className="w-full h-[10vh] bg-white static bottom-0 text-gray-400 flex flex-col justify-center ">
    <div>

      <ul className=' flex flex-row justify-center'>
      <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Politique de confidentialité</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>

      <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Politique des cookies</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>

      <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Conditions d’utilisation</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>

      <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Nous contacter</a></li>
			

    </ul>
    </div>


    <div className='flex justify-center'>
      <ul className="hidden absolute lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6  ">
			<li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">© Animalin Company, tous droits réservés</a></li>
			
      </ul>
      </div>
  

      

   </div>
  )
}