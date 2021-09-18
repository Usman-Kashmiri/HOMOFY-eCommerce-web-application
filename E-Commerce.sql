-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `adminID` varchar(20) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) DEFAULT NULL,
  `email` varchar(60) NOT NULL,
  `pass` varchar(30) NOT NULL,
  UNIQUE KEY `adminID` (`adminID`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('ad1','Areeb','Azim','areebbinazim360@gmail.com','abc'),('ad2','Moiz','Ali','amoiz3731@gmail.com','abc'),('ad3','S.Saad','Ali','16610122182wwe@gmail.com','abc'),('ad4','M.Zain','Ammad','zainammad05@gmail.com','abc');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `noOfProducts` int NOT NULL,
  `totalPrice` int NOT NULL,
  `custID` varchar(20) DEFAULT NULL,
  KEY `custID` (`custID`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`custID`) REFERENCES `customer` (`custID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `custID` varchar(20) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) DEFAULT NULL,
  `email` varchar(60) NOT NULL,
  `phno` varchar(30) NOT NULL,
  `address` varchar(60) NOT NULL,
  `country` varchar(30) NOT NULL DEFAULT 'Pakistan',
  `city` varchar(30) NOT NULL,
  `postalCode` int NOT NULL,
  `pass` varchar(30) DEFAULT NULL,
  UNIQUE KEY `custID` (`custID`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phno` (`phno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('ct1','Areeb','Azim','areebbinazim360@gmail.com','03122885343','House-7,Street4','Pakistan','Karachi',75950,'abc'),('ct10','a','b','abc@gmail.com','031','abc','aa','aa',11,'abc'),('ct12312131','dasda','dsad','asdsdsadad@gmail.com','4564648789','fdsadsa','sadsad','fsadfsf',5464656,'dsad'),('ct2','Moiz','Ali','amoiz3731@gmail.com','03122885344','House-8,Street4','Pakistan','Karachi',75951,'abc'),('ct3','S.Saad','Ali','16610122182wwe@gmail.com','03122885345','House-9,Street4','Pakistan','Karachi',75952,'abc'),('ct4','M.Zain','Ammad','zainammad05@gmail.com','03122885346','House-10,Street4','Pakistan','Karachi',75953,'abc'),('ct44','sa','d','aakn@gmail.com','76','ddsa','sas','gfh',75,'das aq'),('ct564444','sada','daada','aaknunny@gmail.com','48776','sadsadsa','sgf','gf',875475,'das sadq'),('ct56922121','sadsad','mbvmnbm','haaadak@gmail.com','6789764424','gjhkijhg','jhky','hfgyt',132144,'dsadas'),('ct9','a','b','a@gmail.com','0312','abc','abc','abc',123,'abc');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orderID` varchar(20) NOT NULL,
  `shipperID` varchar(20) NOT NULL,
  `custID` varchar(20) NOT NULL,
  `quantity` int NOT NULL,
  `orderDate` date NOT NULL,
  `shippedDate` date DEFAULT NULL,
  UNIQUE KEY `orderID` (`orderID`),
  UNIQUE KEY `shipperID` (`shipperID`),
  UNIQUE KEY `custID` (`custID`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`shipperID`) REFERENCES `shipper` (`shipperID`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`custID`) REFERENCES `customer` (`custID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES ('od1','sp1','ct1',2,'2021-09-01','2021-09-04'),('od2','sp2','ct2',1,'2021-09-02','2021-09-05'),('od3','sp3','ct3',5,'2021-09-03','2021-09-04'),('od4','sp4','ct4',4,'2021-09-01','2021-09-05');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `prodID` varchar(20) NOT NULL,
  `prodname` varchar(50) NOT NULL,
  `prodDesc` varchar(100) NOT NULL,
  `discount` int NOT NULL DEFAULT '0',
  `unitweightKg` float NOT NULL,
  `unitprice` int NOT NULL,
  `img` varchar(500) NOT NULL,
  UNIQUE KEY `prodID` (`prodID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('pd111','Kitchen Mini Hand Crusher','Good Quality 2 in 1',0,0.4,600,'https://static-01.daraz.pk/p/0cd86c421b1dfabb15559a42eea23d70.jpg'),('pd112','Juicer Blender','Good Quality 3 in 1',0,1.5,6000,'https://static-01.daraz.pk/p/215464dec2c8978fae3a35884a1b6a73.jpg'),('pd114','Denim Jeans Pant','Good Quality Full Cotton',0,0.8,1500,'https://static-01.daraz.pk/p/9b62e775ae1470ccf7f9d565cbce4bee.jpg'),('pd115','Jeans Pant Blue','Good Quality Full Cotton',0,0.4,1500,'https://static-01.daraz.pk/p/6216ef66da7ac6f623160a8ac456334b.jpg'),('pd116','Boxing Gloves','Good Quality Fabric',0,0.7,900,'https://static-01.daraz.pk/p/ec0987dc31ceb5ba7731aecf866ad63d.jpg'),('pd224','Slim Fit T shirts','Pack of 5 Shirts',0,1.5,1900,'https://static-01.daraz.pk/p/05fb312c66809b1c92bcc260a581071d.jpg'),('pd332','Black & White Football','Good Quality',0,0.3,1800,'https://static-01.daraz.pk/p/bccf6f00a1d530b402bf804a29f40430.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipper`
--

DROP TABLE IF EXISTS `shipper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shipper` (
  `shipperID` varchar(20) NOT NULL,
  `cnic` varchar(30) NOT NULL,
  `phno` varchar(30) NOT NULL,
  `address` varchar(60) NOT NULL,
  `salary` int DEFAULT NULL,
  UNIQUE KEY `shipperID` (`shipperID`),
  UNIQUE KEY `cnic` (`cnic`),
  UNIQUE KEY `phno` (`phno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipper`
--

LOCK TABLES `shipper` WRITE;
/*!40000 ALTER TABLE `shipper` DISABLE KEYS */;
INSERT INTO `shipper` VALUES ('sp1','123','03123456567','House-7,Street8',15000),('sp2','456','03123456568','House-8,Street7',16000),('sp3','789','03123456569','House-9,Street6',25000),('sp4','0321','03123456560','House-10,Street5',18000);
/*!40000 ALTER TABLE `shipper` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-16 14:25:26
