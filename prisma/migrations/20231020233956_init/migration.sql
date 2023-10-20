-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "Horaire" (
    "id" SERIAL NOT NULL,
    "jour" VARCHAR(255) NOT NULL,
    "h1" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "h2" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "compagnieId" INTEGER,

    CONSTRAINT "Horaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Social" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "link" VARCHAR(255) NOT NULL,
    "compagnieId" INTEGER,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Compagnie" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "logo" VARCHAR(255),
    "slogan" VARCHAR(255),
    "tel" VARCHAR(255) NOT NULL,
    "lieu" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "Compagnie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" SERIAL NOT NULL,
    "question" VARCHAR(255) NOT NULL,
    "reponse" TEXT NOT NULL,
    "link" VARCHAR(255),

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategorieActu" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255),

    CONSTRAINT "CategorieActu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actu" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "titre" VARCHAR(255) NOT NULL,
    "descr" TEXT,
    "date" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categorieId" INTEGER NOT NULL,

    CONSTRAINT "Actu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Race" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(255) NOT NULL,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sexe" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(255) NOT NULL,

    CONSTRAINT "Sexe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategorieAnimal" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255),

    CONSTRAINT "CategorieAnimal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(255),
    "img" VARCHAR(255) NOT NULL,
    "publicId" VARCHAR(255),
    "animalId" INTEGER NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "raceId" INTEGER,
    "sexeId" INTEGER NOT NULL,
    "categorieId" INTEGER NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "naissance" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateArrive" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "descrShort" VARCHAR(255) NOT NULL,
    "descr" TEXT NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "prenom" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategorieActu_slug_key" ON "CategorieActu"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Actu_slug_key" ON "Actu"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CategorieAnimal_slug_key" ON "CategorieAnimal"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Animal_slug_key" ON "Animal"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "email" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Horaire" ADD CONSTRAINT "Horaire_compagnieId_fkey" FOREIGN KEY ("compagnieId") REFERENCES "Compagnie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Social" ADD CONSTRAINT "Social_compagnieId_fkey" FOREIGN KEY ("compagnieId") REFERENCES "Compagnie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Actu" ADD CONSTRAINT "Actu_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "CategorieActu"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "CategorieAnimal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_sexeId_fkey" FOREIGN KEY ("sexeId") REFERENCES "Sexe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
