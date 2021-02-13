/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/

 CREATE DATABASE groceryList;
 SHOW DATABASES;
 USE groceryList;

CREATE TABLE groceryListItems (id INT FOREIGN KEY, itemName VARCHAR(20), quantity INT NOT NULL);

