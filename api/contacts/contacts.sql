CREATE TABLE `contacts` (
`id` INT NOT NULL AUTO_INCREMENT ,
`name` VARCHAR( 50 ) NOT NULL ,
`address` VARCHAR( 100 ) NOT NULL ,
`tel` VARCHAR( 15 ) NOT NULL ,
`email` VARCHAR( 50 ) NOT NULL ,
`type` VARCHAR( 20 ) NOT NULL ,
PRIMARY KEY ( `id` )
)