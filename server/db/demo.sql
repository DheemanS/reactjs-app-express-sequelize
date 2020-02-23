-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 23, 2020 at 04:38 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `friends` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) NOT NULL,
  `FriendId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`createdAt`, `updatedAt`, `userId`, `FriendId`) VALUES
('2020-02-21 00:00:00', '2020-02-21 00:00:00', 1, 2),
('2020-02-21 00:00:00', '2020-02-21 00:00:00', 1, 3),
('2020-02-22 00:00:00', '2020-02-22 00:00:00', 2, 5),
('2020-02-21 00:00:00', '2020-02-21 00:00:00', 3, 4),
('2020-02-23 00:00:00', '2020-02-23 00:00:00', 4, 5),
('2020-02-23 00:00:00', '2020-02-23 00:00:00', 5, 6),
('2020-02-23 00:00:00', '2020-02-23 00:00:00', 6, 7),
('2020-02-23 00:00:00', '2020-02-23 00:00:00', 7, 8),
('2020-02-23 00:00:00', '2020-02-23 00:00:00', 8, 9),
('2020-02-23 00:00:00', '2020-02-23 00:00:00', 9, 10),
('2020-02-23 00:00:00', '2020-02-23 00:00:00', 10, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `avatar`, `createdAt`, `updatedAt`) VALUES
(1, 'Sid', 'D', NULL, '2020-02-21 17:24:43', '2020-02-21 17:24:43'),
(2, 'John', 'S', NULL, '2020-02-21 17:25:23', '2020-02-21 17:25:23'),
(3, 'Steve', 'S', NULL, '2020-02-21 17:25:56', '2020-02-21 17:25:56'),
(4, 'David', 'W', NULL, '2020-02-21 17:26:09', '2020-02-21 17:26:09'),
(5, 'Jack', 'Ryan', NULL, '2020-02-22 00:00:00', '2020-02-22 00:00:00'),
(6, 'Sumi', 'D', NULL, '2020-02-23 12:03:51', '2020-02-23 12:03:51'),
(7, 'Rahul', 'T', NULL, '2020-02-23 12:04:13', '2020-02-23 12:04:13'),
(8, 'Sam', 'S', NULL, '2020-02-23 12:04:23', '2020-02-23 12:04:23'),
(9, 'Kapil', 'S', NULL, '2020-02-23 12:04:46', '2020-02-23 12:04:46'),
(10, 'Sachin', 'T', NULL, '2020-02-23 12:04:56', '2020-02-23 12:04:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`userId`,`FriendId`),
  ADD KEY `FriendId` (`FriendId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `friends`
--
ALTER TABLE `friends`
  ADD CONSTRAINT `friends_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `friends_ibfk_2` FOREIGN KEY (`FriendId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
