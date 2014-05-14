/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50516
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50516
File Encoding         : 65001

Date: 2014-05-14 15:57:55
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `books`
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `keywords` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO `books` VALUES ('1', 'aTitle', 'aAuthor', '2014-04-05', 'aaa');
INSERT INTO `books` VALUES ('2', 'bTitle', 'bAuthor', '2014-04-04', 'bbb');
INSERT INTO `books` VALUES ('3', 'cTitle', 'cAuthor', '2014-04-04', 'ccc');
INSERT INTO `books` VALUES ('4', 'staticTitle', 'staticAuthor', '0000-00-00', 'staticKeywords');
INSERT INTO `books` VALUES ('5', 'Tower 1', 'author', '0000-00-00', 'Array');
INSERT INTO `books` VALUES ('6', 'Tower 1', 'adfg', '0000-00-00', 'Array');
INSERT INTO `books` VALUES ('9', 'Tower 1', 'aaa', '2014-04-07', 'what is contest ');
INSERT INTO `books` VALUES ('10', 'Tower 2', 'qwerty', '2014-04-08', 'qaz ');
INSERT INTO `books` VALUES ('11', 'Tower 1', 'asdfgh', '2014-04-20', 'SASDF ');
INSERT INTO `books` VALUES ('30', 'Tower 1', 'sf', '2014-04-20', 'SASDF ');
