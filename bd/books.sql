-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: sql.freedb.tech    Database: freedb_books4you
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Book`
--

DROP TABLE IF EXISTS `Book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Book` (
  `idBook` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `published` int DEFAULT NULL,
  `shop` varchar(1000) DEFAULT NULL,
  `reviews` varchar(1000) DEFAULT NULL,
  `genre` varchar(20) NOT NULL,
  `descr` tinytext NOT NULL,
  `image` varchar(1000) NOT NULL,
  `fkAuthor` int DEFAULT NULL,
  PRIMARY KEY (`idBook`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book`
--

LOCK TABLES `Book` WRITE;
/*!40000 ALTER TABLE `Book` DISABLE KEYS */;
INSERT INTO `Book` VALUES (1,'To Kill a Mockingbird',1960,'https://www.amazon.com/To-Kill-a-Mockingbird-Harper/dp/0060935464','Goodreads','Ficción','Una novela sobre la injusticia racial en el sur de Estados Unidos vista a través de los ojos de una niña.','Portada',1),(2,'1984',1949,'https://www.amazon.com/1984-George-Orwell/dp/0451524934','Goodreads','Distopía','Una novela que describe una sociedad totalitaria bajo la vigilancia constante del Gran Hermano.','Portada\n',2),(3,'The Great Gatsby\n',1925,'https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567','Goodreads','Ficción','La historia del misterioso millonario Jay Gatsby y su obsesión por Daisy Buchanan.','Portada',3),(4,'Pride and Prejudice',1813,'https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/1503290565','Goodreads','Romance','La novela sigue las relaciones y los malentendidos entre Elizabeth Bennet y el señor Darcy.\n','Portada',4),(5,'The Catcher in the Rye',1951,'https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769487','Goodreads','Ficción','La historia de Holden Caulfield, un adolescente rebelde que vaga por Nueva York.','Portada',5);
/*!40000 ALTER TABLE `Book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `idAuthor` int NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `country` varchar(40) DEFAULT NULL,
  `photo` varchar(1000) NOT NULL,
  PRIMARY KEY (`idAuthor`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'Harper Lee','Estados Unido','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Harper_Lee_Nov07.jpg/220px-Harper_Lee_Nov07.jpg'),(2,'George Orwell','Reino Unido','https://upload.wikimedia.org/wikipedia/commons/c/c3/George_Orwell_press_photo.jpg'),(3,'F. Scott Fitzgerald\n','Estados Unidos','https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/F_Scott_Fitzgerald_1921.jpg/220px-F_Scott_Fitzgerald_1921.jpg'),(4,'Jane Austen','Reino Unido','https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/CassandraAusten-JaneAusten(c.1810)_hires.jpg/220px-CassandraAusten-JaneAusten(c.1810)_hires.jpg'),(5,'J.D. Salinger ','Estados Unidos','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JD_Salinger.jpg/220px-JD_Salinger.jpg');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-03 13:20:13
