#Cria um database
create database db_lion_school_turma_manha;

#Visualiza todos os databases existentes no banco de dados
show databases;

#Seleciona o database que será utilizado
use db_lion_school_turma_manha;

#Visualiza todas as tabelas existentes em um databases
show tables;

#Cria a tabela de aluno
create table tbl_aluno (
id int not null primary key auto_increment,
nome varchar(100) not null,
cpf varchar(18) not null,
rg varchar(15) not null,
data_nascimento date not null,
email varchar(256) not null,
unique index(id) 
);

#Descreve os atributos da tabela e suas caracteristicas
desc tbl_aluno;

#Insere dados na tabela de alunos
insert into tbl_aluno (
						nome,
						cpf,
						rg,
						data_nascimento,
						email
						)
				values (
					'José da Silva',
					'300.400.48-10',
					'22.70.123-7', 
					'2000-05-20', 
					'jose@gmail.com'
                );
        
#Visualizar o conteudo da tabela
select * from tbl_aluno;

insert into tbl_aluno (
						nome,
						cpf,
						rg,
						data_nascimento,
						email
						)
				values (
					'Maria da Silva',
					'200.300.48-12',
					'33.99.123-7', 
					'1995-10-03', 
					'maria@gmail.com'
                );
        
#Atualiza informações na tabela (Não esquecer do criterio de busca Where)
update tbl_aluno set email = 'jose@hotmail.com' where id = 1;

#Exclui o registro da tabela deacordo com o criterio de busca
delete from tbl_aluno where id = 2;
