DROP DATABASE IF EXISTS XPInc;

CREATE DATABASE XPInc;

CREATE TABLE XPInc.clientes(
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  saldo DECIMAL(65,2) NOT NULL DEFAULT (0), 
  
  CONSTRAINT PRIMARY KEY(id)
  
) ENGINE = INNODB;

CREATE TABLE XPInc.transacoesConta(
  id INT NOT NULL AUTO_INCREMENT,
  data DATETIME DEFAULT CURRENT_TIMESTAMP,
  idCliente INT NOT NULL,
  tipo VARCHAR(255) NOT NULL,
  valor DECIMAL(65,2) NOT NULL,
  
  CONSTRAINT PRIMARY KEY(id),
  FOREIGN KEY(idCliente) REFERENCES clientes(id)
  
) ENGINE = INNODB;

CREATE TABLE XPInc.ativos(
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  quantidade INT NOT NULL,
  valor DECIMAL(65,2) NOT NULL,  
  
  CONSTRAINT PRIMARY KEY(id)
  
) ENGINE = INNODB;

CREATE TABLE XPInc.clientesAtivos(
  id INT NOT NULL AUTO_INCREMENT,
  idCliente INT NOT NULL,
  idAtivo INT NOT NULL,
  quantidade INT NOT NULL, 
  
  CONSTRAINT PRIMARY KEY(id),
  FOREIGN KEY(idCliente) REFERENCES clientes(id),
  FOREIGN KEY(idAtivo) REFERENCES ativos(id)
  
) ENGINE = INNODB;

CREATE TABLE XPInc.transacoesAtivos(
  id INT NOT NULL AUTO_INCREMENT,
  data DATETIME DEFAULT CURRENT_TIMESTAMP,
  idCliente INT NOT NULL,
  idAtivo INT NOT NULL,
  tipo VARCHAR(255) NOT NULL,
  quantidade INT NOT NULL, 
  
  CONSTRAINT PRIMARY KEY(id),
  FOREIGN KEY(idCliente) REFERENCES clientes(id),
  FOREIGN KEY(idAtivo) REFERENCES ativos(id)
  
) ENGINE = INNODB;

INSERT INTO XPInc.clientes(nome, email, senha)
VALUES 
('Lázaro Kabib', 'lazarokabib94@gmail.com', 'lazaro1234' ),
('Matheus Kabib', 'matheuskabib@gmail.com', 'matheus1234'),
('Erivânia', 'erivaniamae@gmail.com', 'nasus1234');

INSERT INTO XPInc.ativos(nome, quantidade, valor)
VALUES
('VALE', 200, 350.2),
('PETROBRAS', 400, 500),
('MAGAZINE LUIZA', 150, 250.7),
('LOJAS RENNER', 249, 321.3),
('HAPVIDA', 334, 446);