-- CreateTable
CREATE TABLE `Horaire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jour` VARCHAR(255) NOT NULL,
    `h1` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `h2` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `compagnieId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Social` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(255) NOT NULL,
    `link` VARCHAR(255) NOT NULL,
    `compagnieId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Compagnie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(255) NOT NULL,
    `logo` VARCHAR(255) NULL,
    `slogan` VARCHAR(255) NULL,
    `tel` VARCHAR(255) NOT NULL,
    `lieu` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Faq` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question` VARCHAR(255) NOT NULL,
    `reponse` TEXT NOT NULL,
    `link` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategorieActu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(100) NOT NULL,
    `nom` VARCHAR(255) NOT NULL,
    `img` VARCHAR(255) NULL,

    UNIQUE INDEX `CategorieActu_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Actu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(100) NOT NULL,
    `titre` VARCHAR(255) NOT NULL,
    `descr` TEXT NULL,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `categorieId` INTEGER NOT NULL,

    UNIQUE INDEX `Actu_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Race` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sexe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategorieAnimal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(100) NOT NULL,
    `nom` VARCHAR(255) NOT NULL,
    `img` VARCHAR(255) NULL,

    UNIQUE INDEX `CategorieAnimal_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(255) NULL,
    `img` VARCHAR(255) NOT NULL,
    `publicId` VARCHAR(255) NULL,
    `animalId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Animal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `raceId` INTEGER NULL,
    `sexeId` INTEGER NOT NULL,
    `categorieId` INTEGER NOT NULL,
    `slug` VARCHAR(100) NOT NULL,
    `nom` VARCHAR(255) NOT NULL,
    `naissance` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `dateArrive` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `descrShort` VARCHAR(255) NOT NULL,
    `descr` TEXT NOT NULL,

    UNIQUE INDEX `Animal_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(255) NOT NULL,
    `prenom` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Horaire` ADD CONSTRAINT `Horaire_compagnieId_fkey` FOREIGN KEY (`compagnieId`) REFERENCES `Compagnie`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Social` ADD CONSTRAINT `Social_compagnieId_fkey` FOREIGN KEY (`compagnieId`) REFERENCES `Compagnie`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Actu` ADD CONSTRAINT `Actu_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `CategorieActu`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_animalId_fkey` FOREIGN KEY (`animalId`) REFERENCES `Animal`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `CategorieAnimal`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_sexeId_fkey` FOREIGN KEY (`sexeId`) REFERENCES `Sexe`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_raceId_fkey` FOREIGN KEY (`raceId`) REFERENCES `Race`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
