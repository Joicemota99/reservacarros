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

CREATE TABLE status (
    id_status INT PRIMARY KEY,
    descricao VARCHAR(50)
);

CREATE TABLE marcacao (
    id_marcacao INT PRIMARY KEY,
    data TIMESTAMPTZ DEFAULT NOW(),
    status_fk INT,
    usuario_fk INT,
    carro_fk INT,
    FOREIGN KEY (status_fk) REFERENCES status(id_status),
    FOREIGN KEY (usuario_fk) REFERENCES usuario(id_usuario),
    FOREIGN KEY (carro_fk) REFERENCES carro(id_carro)
);



