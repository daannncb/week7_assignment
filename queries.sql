CREATE TABLE users ( 
  user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE movies (
  movie_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  movie_title VARCHAR(100) NOT NULL
);

CREATE TABLE user_movies (
  user_id INT REFERENCES users(user_id), 
  movie_id INT REFERENCES movies(movie_id), 
  watched_status BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (user_id, movie_id)
);

INSERT INTO users 
(username)
VALUES
('Dan'),
('Tom'),
('Jason Derulo'),
('$$CashMoney$$');

INSERT INTO movies 
(movie_title)
VALUES
('Juno2'),
('Driving Miss Daisy2'),
('Vivarium2'),
('Saint Maude2'),
('The Day After Tomorrow2');

INSERT INTO user_movies (user_id, movie_id, watched_status)
VALUES 
(2, 6, TRUE),
(3, 7, TRUE),
(4, 8, TRUE),
(3, 9, TRUE),
(2, 10, TRUE)


-- Test Query
SELECT u.username, m.movie_title, um.watched_status 
FROM user_movies AS um
JOIN users AS u ON u.user_id = um.user_id
JOIN movies AS m ON m.movie_id = um.movie_id
WHERE u.username = 'Dan'

-- get watched movies query
SELECT m.movie_title
FROM user_movies AS um
JOIN users AS u ON u.user_id = um.user_id
JOIN movies AS m ON m.movie_id = um.movie_id
WHERE u.username = 'Dan' AND um.watched_status = TRUE 
--dan to be replaced with variable from form

--get unwatched movies query
SELECT m.movie_title
FROM user_movies AS um
JOIN users AS u ON u.user_id = um.user_id
JOIN movies AS m ON m.movie_id = um.movie_id
WHERE u.username = 'Dan' AND um.watched_status = FALSE 

--post new user
INSERT INTO users (username) VALUES ($1)

--post new movies 
INSERT INTO movies (movie_title) VALUES ($1);
INSERT INTO users (username) VALUES ($2);