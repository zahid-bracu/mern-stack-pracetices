-- tutorial site :  
https://www.postgresqltutorial.com/ 
 


-- for help : 
\?
-- list of database : 
\l
-- for help : 
\help

--create databse : 
CREATE DATABASE yelp;

--create table : 
CREATE TABLE products (
	id INT NOT NULL,
	name VARCHAR(500),
	price INT NOT NULL,
	on_sale boolean
  );


--add new column : 
ALTER table products add column featured boolean;

--delete column :
 ALTER table products delete column featured boolean;

--drop table : 
Drop table table_name;

--drop db : 
DROP database db;


--create table for yelp projects
CREATE TABLE restaurants(
    id INT,
    name VARCHAR(50),
    location VARCHAR(50),
    price_range INT
);


--insert data to table
INSERT INTO restaurants(id, name, location, price_range)
VALUES (123, 'mcdonalds', 'new york', 3);


--show data from table
SELECT * FROM restaurants;