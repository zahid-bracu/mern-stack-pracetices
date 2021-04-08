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
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50)  NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NUll
);


--insert data to table
INSERT INTO restaurants(  name, location, price_range)
VALUES (  'mcdonalds', 'new york', 3);


--update data on table
`UPDATE restaurants SET name='${req.body.name}', location='${req.body.location}' where id='${req.params.id}'`

--delete data from table
`DELETE FROM restaurants where id='${req.params.id}'`


--show data from table
SELECT * FROM restaurants;

--show data with condtion 
`SELECT * FROM restaurants WHERE id='${req.params.id}'`

--db name: 
yelp

--table name:
restaurants

--table information
id 
namelocation
price_range