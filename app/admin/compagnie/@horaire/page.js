
// import React, { useEffect, useState } from 'react';
import { GetFetchCompagnie1 } from '@/utils/fetch/Compagnie';

const CompagniePage = async () => {
  const {compagnie} = await GetFetchCompagnie1();
  // console.log(compagnie)
  // const [compagnie, setCompagnie] = useState([]);
  // const [loading, isLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchCompagnie() {
  //     isLoading(true)
  //     try {
  //       const { compagnie } = await GetFetchCompagnie1();
  //       setCompagnie(compagnie);
  //       isLoading(false)
  //     } catch (error) {
  //       console.error('Erreur lors de la récupération de la compagnie :', error);
  //     }
  //   }
  //   fetchCompagnie();

  // }, []);
  return (
    <div className='w-full h-[50%] bg-slate-600 p-4'>
      {console.log(compagnie)}
      <h1>Nom de la compagnie : {compagnie.nom}</h1>
      <h1>Horaire : </h1>
      {compagnie.horaire.map((horaire)=> (
        <div key={horaire.id}>
          <p><span>jour : {horaire.jour}</span></p>
          <p><span>Heure de début : {horaire.h1.split('T')[1].slice(0, 5)}</span></p>
          <p><span>Heure de fin : {horaire.h2.split('T')[1].slice(0, 5)}</span></p>
        </div>
      ))}
      
    </div>
  )
}

export default CompagniePage