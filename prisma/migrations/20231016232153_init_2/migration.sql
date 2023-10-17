-- DropIndex
DROP INDEX `Actu_categorieId_fkey` ON `actu`;

-- DropIndex
DROP INDEX `Animal_categorieId_fkey` ON `animal`;

-- DropIndex
DROP INDEX `Animal_raceId_fkey` ON `animal`;

-- DropIndex
DROP INDEX `Animal_sexeId_fkey` ON `animal`;

-- DropIndex
DROP INDEX `Horaire_compagnieId_fkey` ON `horaire`;

-- DropIndex
DROP INDEX `Images_animalId_fkey` ON `images`;

-- DropIndex
DROP INDEX `Social_compagnieId_fkey` ON `social`;

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
