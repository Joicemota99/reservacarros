CREATE DATABASE reservaCarros;

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    usuario_fk INT
);

CREATE TABLE carro (
    id_carro INT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    placa VARCHAR(50) NOT NULL,
    carro_fk INT
);

CREATE TABLE marcacao (
    id_marcacao INT PRIMARY KEY,
    data varchar(45)
);



