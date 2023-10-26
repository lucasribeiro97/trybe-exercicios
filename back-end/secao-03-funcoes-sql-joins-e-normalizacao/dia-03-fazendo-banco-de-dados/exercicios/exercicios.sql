CREATE SCHEMA zoo;
USE zoo;

CREATE TABLE especie(
	especie_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
);

CREATE TABLE localizacao(
	localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
    pais VARCHAR(50)
);

CREATE TABLE gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
);

CREATE TABLE cuidador (
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    gerente_id INT NOT NULL,
    nome VARCHAR(50),
    FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    idade INT,
    sexo VARCHAR(20),
    especie_id INT NOT NULL,
    localizacao_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    FOREIGN KEY (especie_id) REFERENCES especie(especie_id),
    FOREIGN KEY (localizacao_id) REFERENCES localizacao(localizacao_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id)
);

CREATE TABLE animal_cuidador(
    animal_id INT,
    cuidador_id INT,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
);