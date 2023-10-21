
import { GetFetchCompagnie1 } from '@/utils/fetch/Compagnie';

const CompagniePageHoraire = async () => {
  const {compagnie} = await GetFetchCompagnie1();
  console.log(compagnie)

  return (
    <div className='w-full h-[50%] bg-slate-600 p-4'>
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

export default CompagniePageHoraire