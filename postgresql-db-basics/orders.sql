--Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.
CREATE TABLE orders ( 
  order_id SERIAL PRIMARY KEY, 
  person_id INTEGER, 
  product_name VARCHAR(200), 
  product_price NUMERIC, 
  quantity INTEGER 
  );

--Add 5 orders to the orders table.
-- Make orders for at least two different people.
-- person_id should be different for different people.
INSERT INTO orders 
  ( person_id, product_name, product_price, quantity ) 
  VALUES 
  ( 0, 'Fries', 12.50, 2 ),
  ( 0, 'Burger', 12.50, 2 ),
  ( 2, 'Fries', 12.50, 2 ),
  ( 2, 'Burger', 12.50, 2 ),
  ( 1, 'Burger', 12.50, 2 );

--Select all the records from the orders table.
SELECT * FROM orders;

--Calculate the total number of products ordered.
SELECT SUM(quantity) FROM orders;

--Calculate the total order price.
SELECT SUM(product_price * quantity) FROM orders;

--Calculate the total order price by a single person_id.
/* The value of person_id depends on what IDs you used. Use a valid ID from your table */
SELECT SUM(product_price * quantity) FROM orders WHERE person_id = 0;