const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker');
const slugify = require('slugify');

const prisma = new PrismaClient();

const main = async() => {

  try{

    // Création de 4-5 races
    const races = [];
    for (let i = 1; i < 6; i++) {
      races.push(
        await prisma.race.create({
          data: {
            nom: 'race'+i,
          },
        })
      );
    }

    // Création de 2 sexes (Mâle et Femelle)
    const sexes = [];
    for (const nom of ['Mâle', 'Femelle']) {
      const sexe = await prisma.sexe.create({
        data: {
          nom: nom,
        },
      });
      sexes.push(sexe);
    }

    // Création de 2 catégories (Chien et Chat)
    const categories = [];
    for (const nom of ['Chien', 'Chat']) {
      const categorie = await prisma.CategorieAnimal.create({
        data: {
          slug: slugify(nom),
          nom: nom,
        },
      });
      categories.push(categorie);
    }

    // Création d'animaux pour chaque race, sexe et catégorie
    for (const race of races) {
      for (const sexe of sexes) {
        for (const categorie of categories) {
          for (let i = 0; i < Math.floor(Math.random()* 5)+1; i++) {
            const randomDigits = Math.floor(Math.random() * 9000000); // Génère des chiffres aléatoires entre 0 et 9000000
            const slug = `${slugify(categorie.nom)}${randomDigits}`;
            const animal = await prisma.animal.create({
              data: {
                raceId: race.id,
                sexeId: sexe.id,
                categorieId: categorie.id,
                nom: faker.lorem.word(),
                slug: slug,
                naissance: faker.date.past(),
                dateArrive: faker.date.recent(),
                descrShort: faker.lorem.sentence(),
                descr: faker.lorem.paragraph(),
              },
            });

            // Création de 2 à 5 images pour chaque animal
            for (let j = 0; j < Math.floor(Math.random()* 3)+1; j++) {
              await prisma.images.create({
                data: {
                  nom: `Image ${j + 1}`,
                  //img: faker.image.animals(400,400),
                  img: 'https://picsum.photos/400/400',
                  animalId: animal.id,
                },
              });
            }
          }
        }
      }
    }
  
  }catch(e){
    console.log(e)
  }finally{
    await prisma.$disconnect();
  }
}
// export async function seedanimal() {
//   await main();
//   console.log('Seeds animal créés avec succès.');
// }
exports.seedanimal = async function () {
  await main();
  console.log('Seeds animal créés avec succès.');
};
