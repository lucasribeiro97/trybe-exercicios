USE pixar;

SELECT m.title, b.domestic_sales, b.international_sales
FROM movies AS m
INNER JOIN box_office AS b
ON b.movie_id = m.id;

SELECT m.title, (b.domestic_sales + b.international_sales)
FROM movies AS m
INNER JOIN box_office AS b
ON m.id = b.movie_id
WHERE international_sales > domestic_sales;

SELECT m.title, b.rating
FROM movies AS m
INNER JOIN box_office as b
ON m.id = b.movie_id
ORDER BY rating DESC;

SELECT *, t.name, t.location
FROM theater AS t
LEFT JOIN movies
ON movies.theater_id = t.id
ORDER BY t.name;

SELECT *, t.name, t.location, t.id
FROM theater AS t
RIGHT JOIN movies
ON movies.theater_id = t.id
ORDER BY t.name;

SELECT *
FROM movies
INNER JOIN box_office AS b
ON b.movie_id = id
WHERE theater_id IS NOT NULL and rating > 8;

