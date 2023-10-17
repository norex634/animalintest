const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

const main = async () => {

    try{

        //seed user
        let user = [];
        let i=1;
        while (i <= 5) {
            const data = {
                nom : faker.person.firstName(),
                prenom : faker.person.lastName(),
                image : "https://picsum.photos/200/200",
                email : faker.internet.email(),
                password : "$2a$12$nXBKfymWaurN6mcg3Xjs0umMu3nbt0DL6YY/mOkTCqOEtBlNo01X6",
                role : "USER",  
            }
            user.push(data)
            i++

        }
        admin = {
            nom : "moule",
            prenom : "flo",
            image: "https://picsum.photos/200/200",
            email: "admin@admin.be",
            password : "$2a$12$nXBKfymWaurN6mcg3Xjs0umMu3nbt0DL6YY/mOkTCqOEtBlNo01X6",
            role : "ADMIN",  
        }
        user.push(admin)
            

        const pushuser = await prisma.user.createMany({data:user})
        
    }catch(e){
        console.log(e)
    }finally{
        await prisma.$disconnect();
    }
}

// export async function seeduser() {
//     await main();
//     console.log('Seeds user créés avec succès.');
//   }

  exports.seeduser = async function () {
    await main();
    console.log('Seeds user créés avec succès.');
  };

  



