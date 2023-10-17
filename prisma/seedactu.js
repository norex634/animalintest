const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker');
const slugify = require('slugify');

const prisma = new PrismaClient();

const main = async() => {

  try{

    // Création de 3 categories
    const categories = [];
    for (const nom of ['News', 'Video','Exclu']) {
      const randomDigits = Math.floor(Math.random() * 1000);
      const categorie = await prisma.categorieActu.create({
        data: {
          slug: `${slugify(nom)}${randomDigits}`,
          nom: nom,
        },
      });
      categories.push(categorie);
    }

    // Création de 5 actu par catégorie
    for (const categorie of categories) {
      for (let j = 1; j < 6; j++) {
        const titre = faker.lorem.word(3)
        const randomDigits = Math.floor(Math.random() * 1000);
        const actu = await prisma.actu.create({
          data: {
            slug: `${slugify(titre)}${randomDigits}`,
            titre: titre,
            descr: faker.lorem.paragraph(1),
            categorieId: categorie.id,
            // Ajoutez d'autres champs au besoin
          },
        });
      }
    }

  }catch(e){
    console.log(e)
  }finally{
    await prisma.$disconnect();
  }
}

// export async function seedactu() {
//   await main();
//   console.log('Seeds actu créés avec succès.');
// }

exports.seedactu = async function () {
  await main();
  console.log('Seeds actu créés avec succès.');
};



