
CREATE DATABASE portalnoticias;

USE portalnoticias;


CREATE TABLE noticias
(
    id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
    title VARCHAR(100) ,
    noticia VARCHAR(100),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE noticias;
 

INSERT INTO noticias( title,noticia)VALUES( 'Titulo 1','LOrem papius 1');

SELECT * FROM noticias;
