const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

const main = async() => {

  try{
    const compagnie = await prisma.compagnie.create({
      data: {
        //nom: faker.company.companyName(),
        nom : "Animalin",
        logo: 'https://picsum.photos/50/50',
        slogan: faker.company.catchPhrase(),
        //tel: faker.phone.phoneNumber('+32 4## ## ## ##'),
        tel: '+32  000 00 00 00',
        lieu: faker.location.city(),
        email: faker.internet.email(),
        horaire: {
          create: [
            {
              jour: 'lundi',
              h1: new Date(),  
              h2: new Date(),
            },
            {
                jour: 'mardi',
                h1: new Date(),
                h2: new Date(),
            },
            {
                jour: 'mercredi',
                h1: new Date(),
                h2: new Date(),
            },
            {
                jour: 'jeudi',
                h1: new Date(),
                h2: new Date(),
            },
            {
                jour: 'vendredi',
                h1: new Date(),
                h2: new Date(),
            },
            // Crée d'autres horaires ici si nécessaire
          ],
        },
        social: {
          create: [
            {
              nom: 'Facebook',
              link: faker.internet.url(),
            },
            {
              nom: 'Instagram',
              link: faker.internet.url(),
            },
            // Crée d'autres réseaux sociaux ici si nécessaire
          ],
        },
      },
    });
  
  }catch(e){
    console.log(e)
  }finally{
    await prisma.$disconnect();
  }
}
    

  // export async function seedcompagnie() {
  //   await main();
  //   console.log('Seeds compagnie créés avec succès.');
  // }

  exports.seedcompagnie = async function () {
    await main();
    console.log('Seeds compagnie créés avec succès.');
  };
  
  