-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2024 at 08:13 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rentaway`
--

-- --------------------------------------------------------

--
-- Table structure for table `apparts`
--

CREATE TABLE `apparts` (
  `id` int(11) NOT NULL,
  `title` varchar(20) NOT NULL,
  `description` text NOT NULL DEFAULT '',
  `price` double NOT NULL,
  `coverImg` text NOT NULL,
  `rating` double NOT NULL DEFAULT 5,
  `reviewCount` int(11) NOT NULL DEFAULT 0,
  `location` varchar(20) NOT NULL DEFAULT '',
  `openSpots` int(11) NOT NULL DEFAULT 0,
  `mail` varchar(50) NOT NULL DEFAULT 'mootez.souilem@gmail.com'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `apparts`
--

INSERT INTO `apparts` (`id`, `title`, `description`, `price`, `coverImg`, `rating`, `reviewCount`, `location`, `openSpots`, `mail`) VALUES
(1, 'Beach House', 'Enjoy a relaxing stay at our beach house in sunny Orlando, FL. Perfect for families, couples, or solo travelers looking to unwind and soak up the sun', 136, 'https://traveler.marriott.com/wp-content/uploads/2021/02/HuatulcoOaxaca_6VillaEscondida_9.jpg', 5, 6, 'Orlando, FL', 3, 'mootez.souilem@gmail.com'),
(2, 'Island House', 'Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that\'ll last a lifetime.', 125, 'https://www.travelandleisure.com/thmb/181yagnEsM84ITqhxIgTveFqzOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-montage-cay-FULLTIMERESORT0823-4f91604fae9340d18c5f6226ea612439.jpg', 5, 30, 'Online', 27, 'mootez.souilem@gmail.com'),
(3, 'Palm House', 'Join us in the beautiful mountains of Colorado for a weekend of hiking, camping, and stargazing. All skill levels welcome!', 150, 'https://i.insider.com/5cf1a446f2f47918fb3e2124?width=700', 4.8, 2, 'Norway', 3, 'mootez.souilem@gmail.com'),
(4, 'Modern Villa', 'Enjoy a relaxing stay at our Modern House in sunny Orlando, FL. Perfect for families, couples, or solo travelers looking to unwind and soak up the sun.', 175, 'https://static2.mansionglobal.com/production/media/article-images/b5416efec73037c3616699dbde7529ea/large_275.jpg', 4.9, 12, 'California', 7, 'mootez.souilem@gmail.com'),
(5, 'Mountain House', 'Join us in the beautiful mountains of Colorado for a weekend of hiking, camping, and stargazing. All skill levels welcome!', 170, 'https://cf.bstatic.com/static/img/theme-index/bg_holidayhomes/8cd8cfbc91ca86a0fac09532b9f5da4eb4960c2e.jpg', 3.8, 8, 'Switzerland', 0, 'mootez.souilem@gmail.com'),
(6, 'Roman Catle', 'Experience the beautiful italian landscape and meet new friends all while conquering rugged terrain on your mountain bike.', 120, 'https://www.heritagedaily.com/wp-content/uploads/2018/01/8656887804_ed595fd16a_h-scaled.jpg', 4.5, 7, 'Italy', 14, 'mootez.souilem@gmail.com'),
(7, 'French Castle', 'Immerse yourself in the rich history and opulence of France with a stay in our luxurious castle. Perfect for a romantic getaway or a family retreat.', 300, 'https://media.cnn.com/api/v1/images/stellar/prod/171206160356-la-mothe-chandeniers.jpg?q=w_3257,h_2171,x_0,y_0,c_fill/h_618', 4.7, 15, 'France', 12, 'mootez.souilem@gmail.com'),
(8, 'Lakefront Cabin', 'Escape to the tranquility of nature with a stay in our cozy lakefront cabin. Enjoy fishing, hiking, and stargazing in the heart of the wilderness.', 100, 'https://cdn.vox-cdn.com/thumbor/0eoiN9XqqsSVbiCNo_h0hbUP_yI=/0x0:1023x682/1200x800/filters:focal(431x260:593x422)/cdn.vox-cdn.com/uploads/chorus_image/image/64006695/0b0cd00c_891f_49a5_a75c_cdd640a23020.f10.0.jpg', 4.6, 15, 'Canada', 5, 'mootez.souilem@gmail.com'),
(9, 'Desert Oasis', 'Experience the magic of the desert with a stay in our oasis retreat. Relax by the pool, take a camel ride, and explore the dunes under the starry sky.', 200, 'https://media-cdn.tripadvisor.com/media/photo-s/2b/03/c6/06/swimming-pool.jpg', 4.8, 3, 'Dubai', 0, 'mootez.souilem@gmail.com'),
(10, 'Ski Chalet', 'Hit the slopes and cozy up by the fireplace in our charming ski chalet. Perfect for winter sports enthusiasts and those seeking a snowy getaway.', 250, 'https://www.abritel.fr/guides-voyage/wp-content/uploads/8H1DUaZYWI2eG20WS42c4/a29d35483b5ad97666b2e4e87ae1b919/front__2_.jpg', 4.4, 9, 'Switzerland', 0, 'mootez.souilem@gmail.com'),
(11, 'Treehouse Retreat', 'Escape the hustle and bustle of city life with a stay in our secluded treehouse retreat. Unwind amidst the treetops and reconnect with nature.', 70, 'https://www.bainland.co.uk/availability/ImageBank/propertyimage/ea9d9ecca48fc113de1164415ac3dee0.jpeg', 4, 8, 'Costa Rica', 2, 'mootez.souilem@gmail.com'),
(12, 'Island Villa', 'Experience island living at its finest with a stay in our luxurious villa. Relax on pristine beaches, snorkel in crystal-clear waters, and indulge in gourmet cuisine.', 100, 'https://www.bainland.co.uk/availability/ImageBank/propertyimage/ea9d9ecca48fc113de1164415ac3dee0.jpeg', 3.8, 18, 'Maldives', 0, 'mootez.souilem@gmail.com'),
(13, 'Countryside Cottage', 'Escape to the charming countryside with a stay in our cozy cottage. Enjoy scenic views, fresh air, and peaceful surroundings.', 110, 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2019/07/Church-Cottage-Shots-12-2.jpg', 5, 1, 'England', 0, 'mootez.souilem@gmail.com'),
(14, 'Historic Manor', 'Step back in time with a stay in our historic manor house. Experience the elegance and grandeur of a bygone era.', 190, 'https://media.architecturaldigest.com/photos/5d012732c9f2f20ac8f26900/master/pass/housefront12x8.jpg', 4.1, 25, 'Slovakia', 3, 'mootez.souilem@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `mail` varchar(50) NOT NULL,
  `id` int(11) NOT NULL,
  `password` varchar(50) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`mail`, `id`, `password`, `admin`) VALUES
('admin@gmail.com', 2, 'admin', 1),
('mootez.souilem@gmail.com', 1, '21055271aa', 1),
('user@gmail.com', 3, 'user', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apparts`
--
ALTER TABLE `apparts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mail` (`mail`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`mail`),
  ADD UNIQUE KEY `pass` (`password`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apparts`
--
ALTER TABLE `apparts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `apparts`
--
ALTER TABLE `apparts`
  ADD CONSTRAINT `fk1` FOREIGN KEY (`mail`) REFERENCES `users` (`mail`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
