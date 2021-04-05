-- Create a table called person that records a person's id, name, age, height ( in cm ), city, favorite_color.
-- id should be an auto-incrementing id/primary key - Use type: SERIAL
CREATE TABLE person ( person_id SERIAL PRIMARY KEY, name VARCHAR(200), age INTEGER, height INTEGER, city VARCHAR(200), favorite_color VARCHAR(200) );

-- Create a table called person that records a person's id, name, age, height ( in cm ), city, favorite_color.
--id should be an auto-incrementing id/primary key - Use type: SERIAL
INSERT INTO person 
  ( name, age, height, city, favorite_color ) 
  VALUES 
  ( 'James', 21, 182, 'Salt Lake', 'Blue' ),
  ( 'Mike', 29, 182, 'Salt Lake', 'Blue' ),
  ( 'Eddie', 23, 182, 'Salt Lake', 'Green' ),
  ( 'Jordan', 21, 182, 'Provo', 'Red' ),
  ( 'Jimmer', 24, 182, 'Provo', 'Red' );

--List all the people in the person table by height from tallest to shortest.
SELECT * FROM person ORDER BY height DESC;

--List all the people in the person table by height from shortest to tallest.
SELECT * FROM person ORDER BY height ASC;

--List all the people in the person table by age from oldest to youngest.
SELECT * FROM person ORDER BY age DESC;

--List all the people in the person table older than age 20.
SELECT * FROM person WHERE age > 20;

--List all the people in the person table that are exactly 18.
SELECT * FROM person WHERE age = 18;

--List all the people in the person table that are less than 20 and older than 30.
SELECT * FROM person WHERE age < 20 OR age > 30;

--List all the people in the person table that are not 27 (Use not equals).
SELECT * FROM person WHERE age != 27;

--List all the people in the person table where their favorite color is not red.
SELECT * FROM person WHERE favorite_color != 'red';

--List all the people in the person table where their favorite color is not red and is not blue.
SELECT * FROM person WHERE favorite_color != 'red' AND favorite_color != 'blue';


--List all the people in the person table where their favorite color is orange or green.
SELECT * FROM person WHERE favorite_color = 'orange' OR favorite_color = 'green';

--List all the people in the person table where their favorite color is orange, green or blue (use IN).
SELECT * FROM person WHERE favorite_color IN ( 'orange', 'green', 'blue' );

--List all the people in the person table where their favorite color is yellow or purple (use IN).
SELECT * FROM person WHERE favorite_color IN ( 'yellow', 'purple' )


