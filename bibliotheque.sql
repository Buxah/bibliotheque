-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mar. 09 avr. 2019 à 21:18
-- Version du serveur :  10.1.34-MariaDB
-- Version de PHP :  7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bibliotheque`
--

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE `clients` (
  `id_client` int(11) NOT NULL,
  `nom` varchar(64) NOT NULL,
  `prenom` varchar(64) NOT NULL,
  `date_naissance` date NOT NULL,
  `email` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id_client`, `nom`, `prenom`, `date_naissance`, `email`) VALUES
(1, 'Dominique', 'Thomas', '1999-05-04', 'lucasdominique99@gmail.com'),
(2, 'Test', 'test', '1999-05-05', 'test@test.com'),
(13, 'ok', 'ok', '1999-05-04', 'lucasdominique99@gmail.com'),
(14, 'domin', 'lucas', '1999-05-04', 'lucasdominique99@gmail.com'),
(15, 'Madau', 'Mirko', '1998-07-01', 'mirkomadau2@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `emprunts`
--

CREATE TABLE `emprunts` (
  `id_emprunt` int(11) NOT NULL,
  `id_client` int(11) NOT NULL,
  `id_exemplaire` int(11) NOT NULL,
  `date_emprunt` date NOT NULL,
  `date_retour` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `exemplaires`
--

CREATE TABLE `exemplaires` (
  `id_exemplaire` int(11) NOT NULL,
  `id_livre` int(11) NOT NULL,
  `actif` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `exemplaires`
--

INSERT INTO `exemplaires` (`id_exemplaire`, `id_livre`, `actif`) VALUES
(2, 1, 1),
(3, 1, 1),
(4, 1, 1),
(5, 1, 1),
(6, 1, 1),
(7, 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `livres`
--

CREATE TABLE `livres` (
  `id_livre` int(11) NOT NULL,
  `titre` varchar(64) NOT NULL,
  `auteur` varchar(64) NOT NULL,
  `edition` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `livres`
--

INSERT INTO `livres` (`id_livre`, `titre`, `auteur`, `edition`) VALUES
(1, 'Alice au pays des merveilles', 'Lewis Carroll', 'Soleil Productions'),
(2, 'The Great Replacement', 'Brenton Tarant', '4chan'),
(3, 'Anna Karenina', 'Leo Tolstoy', 'Pocket'),
(4, 'e', 'e', 'e'),
(5, 'e', 'e', 'e'),
(6, 'e', 'e', 'e'),
(7, 't', 't', 't');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id_client`);

--
-- Index pour la table `emprunts`
--
ALTER TABLE `emprunts`
  ADD PRIMARY KEY (`id_emprunt`),
  ADD KEY `id_client` (`id_client`),
  ADD KEY `id_exemplaire` (`id_exemplaire`);

--
-- Index pour la table `exemplaires`
--
ALTER TABLE `exemplaires`
  ADD PRIMARY KEY (`id_exemplaire`),
  ADD KEY `id_livre` (`id_livre`);

--
-- Index pour la table `livres`
--
ALTER TABLE `livres`
  ADD PRIMARY KEY (`id_livre`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `clients`
--
ALTER TABLE `clients`
  MODIFY `id_client` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `emprunts`
--
ALTER TABLE `emprunts`
  MODIFY `id_emprunt` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `exemplaires`
--
ALTER TABLE `exemplaires`
  MODIFY `id_exemplaire` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `livres`
--
ALTER TABLE `livres`
  MODIFY `id_livre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `emprunts`
--
ALTER TABLE `emprunts`
  ADD CONSTRAINT `id_client` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id_client`),
  ADD CONSTRAINT `id_exemplaire` FOREIGN KEY (`id_exemplaire`) REFERENCES `exemplaires` (`id_exemplaire`);

--
-- Contraintes pour la table `exemplaires`
--
ALTER TABLE `exemplaires`
  ADD CONSTRAINT `id_livre` FOREIGN KEY (`id_livre`) REFERENCES `livres` (`id_livre`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
