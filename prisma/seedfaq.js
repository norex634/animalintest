const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker');
const slugify = require('slugify');

const prisma = new PrismaClient();

const main = async() => {

  try{

    const faq = [];
    
    for (let i = 1; i < 6; i++) {
      faq.push(
        await prisma.faq.create({
          data: {
            question: faker.lorem.lines({ min: 1, max: 3 }),
            reponse: faker.lorem.lines({ min: 1, max: 3 }),
            link:faker.internet.url()
          },
        })
      );
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

exports.seedfaq = async function () {
  await main();
  console.log('Seeds faq créés avec succès.');
};



