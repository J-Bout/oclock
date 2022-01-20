-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           5.7.33 - MySQL Community Server (GPL)
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour memory_db
CREATE DATABASE IF NOT EXISTS `memory_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `memory_db`;

-- Listage de la structure de la table memory_db. mdb_users
CREATE TABLE IF NOT EXISTS `mdb_users` (
  `ID` int(12) NOT NULL AUTO_INCREMENT,
  `user` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `user_score` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4;

-- Listage des données de la table memory_db.mdb_users : ~5 rows (environ)
/*!40000 ALTER TABLE `mdb_users` DISABLE KEYS */;
REPLACE INTO `mdb_users` (`ID`, `user`, `user_score`, `date`) VALUES
	(64, 'current user', '00 : 08', '2022-01-19'),
	(65, 'current user', '00 : 20', '2022-01-20'),
	(66, 'current user', '00 : 14', '2022-01-20'),
	(67, 'current user', '00 : 06', '2022-01-20'),
	(68, 'current user', '00 : 15', '2022-01-20');
/*!40000 ALTER TABLE `mdb_users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
