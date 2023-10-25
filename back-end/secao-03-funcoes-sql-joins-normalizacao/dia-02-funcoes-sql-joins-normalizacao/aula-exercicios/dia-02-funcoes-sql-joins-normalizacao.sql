USE sakila;

SELECT city.city, city.country_id, country.country
FROM sakila.city AS city
INNER JOIN sakila.country AS country
ON city.country_id = country.country_id;

SELECT a.actor_id, CONCAT(a.first_name, " ", a.last_name) AS full_name, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

SELECT s.first_name, s.last_name, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;

SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY first_name DESC
LIMIT 100;

SELECT c.first_name, c.email, a.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

SELECT c.first_name, c.last_name, COUNT(r.rental_id) AS filmes_alugados
FROM sakila.customer AS c
INNER JOIN sakila.rental as r
ON r.customer_id = c.customer_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY first_name DESC, last_name DESC;

SELECT s.first_name, s.last_name, AVG(p.amount) AS media_pagamento
FROM sakila.staff AS s
INNER JOIN sakila.payment as p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film as f
INNER JOIN sakila.film_actor
ON a.actor_id = film_actor.actor_id AND f.film_id = film_actor.film_id;
