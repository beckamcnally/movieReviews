 DROP DATABASE IF EXISTS movies_db;
    CREATE DATABASE movies_db;

    USE movies_db;

    CREATE TABLE movies (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      movie_name VARCHAR(100) NOT NULL
    );

--  WANT TO TELL IT to start the ids at diffent points just to make it not confusing

    CREATE TABLE review (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      movie_id INT,
      review TEXT NOT NULL,
      FOREIGN KEY (movie_id)
      REFERENCES movies(id)
      ON DELETE SET NULL
    );