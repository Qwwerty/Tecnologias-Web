/*====================SEQUENCIA ID===================================*/
CREATE SEQUENCE seq_produto
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    START 1

CREATE SEQUENCE seq_cliente
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    START 1
    

CREATE SEQUENCE seq_usuario
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    START 1
    
/*=============================TABLES==================================*/
CREATE TABLE PRODUTO
(
  id bigint DEFAULT nextval('seq_produto'::regclass),
  nome character varying not null,
  valor bigint not null
);

CREATE TABLE CLIENTE
(
  id bigint NOT NULL DEFAULT nextval('seq_cliente'::regclass),
  nome character varying NOT NULL,
  email character varying
);

CREATE TABLE USUARIO
(
  id bigint DEFAULT nextval('usuario_seq'::regclass),
  login character varying NOT NULL,
  senha character varying NOT NULL
);

