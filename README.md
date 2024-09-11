# **Grupo 2024.2**

# **Cardapio**

## **Projeto Final, Toti, Grupo 05, 2024.2**

| **Sumário** |
|-------------|
| [Desenvolvedores](#Desenvolvedores) |
| [Como executar o projeto inicial](#Descrição-do-Projeto) |
| [Git](#Git-tutorial) |
| [Informações do php](#Comandos-necessários-para-o-projeto-em-PHP) |

#### Desenvolvedores:

* Isaac kapela
* Caleb Nharnah
* jose leonardo 
* Carlos Brizuela
* Junior Có
* Nehomar Villanueva



#### Scrum Master:

* [Isaac kapela](https://github.com/isaac-kapela)

#### Links Úteis:

* [Trello](https://trello.com/b/WNH1z5A7/projeto-final-toti)





## Descrição do Projeto:

* Projeto / Projeto final do curso da toti  [Toti diversidade](https://totidiversidade.com.br/), turma 47 2024.2;
* Possuirá Front-End em HTML, CSS, React, JavaScript, Bootstrap e Back-End em JavaScript com Node.js no padrão MVC, com Banco de Dados SQLite;





## Git Tutorial

### Instalação

Pra instalar, basta acessar a página de [downloads](https://git-scm.com/downloads) e seguir as instruções\
Pra se conectar, utilize os seguinte comandos: <sub>(Substitua o nome e o e-mail para o seu)<sub/>
```
git config --global user.name "nomeDeUsuario"
```
```
git config --global user.email email@cToti.com.br
```



### Primeira Configuração

* Pelo terminal entre na pasta onde irá guardar o projeto: cd /caminho/para/a/pasta, depois inicialize o git na pasta com o comando: `git init`

* Outro jeito de fazer o citado acima: clique com o botão direito na pasta e selecione "Git Bash Here" para abrir o terminal do git

* Crie um clone do repositório: `git clone https://github.com/link-do-repositorio`

* Entre na pasta criada pelo comando clone: cd /caminho/para/a/pasta/nova

* Crie sua branch usando como o padrão o nome da feature que você está a desenvolver: `git checkout -b nome_da_feature`

* Após criada a branch você será redirecionado automaticamente a ela, neste espaço que você desenvolverá sua parte do projteto




### Rotina

* Adicione as alterações feitas: `git add .`

* Cheque em qual branch você está e quais alterações foram adicionadas: `git status`

* Dê um commit com uma mensagem especificando as alterações realizadas: `git commit -m "mensagem especificando o que foi feito"`

* Envie o commit feito para sua branch: `git push origin suabranch`



### Quando estiver tudo prontinho *(com autorização do SCRUM Master)*

* Volte para a main: `git checkout main`

* Atualize a main: `git pull`

* Volte para a sua branch: `git checkout nomedabranch`

* Mescle a main com a sua branch : `git merge main`

* Corrija os possíveis conflitos

* Confirme o merge (apenas quando solicitado pelo Scrum Master): `git push origin suabranch`

* Espera a confirmação do seu SCRUM

* Volte para a main: `git checkout main`

* Mescle a main com as alterações enviadas para sua branch (apenas quando solicitado pelo Scrum Master): `git merge suabranch`

* Confirme o merge (apenas quando solicitado pelo Scrum Master): `git push origin main`



### Comandos Básicos

* Para atualizar a main: `git pull`

* Para atualizar alguma branch: `git pull origin branch`

* Ver informações da branch: `git status`

* Para trocar de branch: `git checkout branch_desejada`

* Adicionar todas as alterações feitas: `git add .`

* Adicionar alteração específica: `git add arquivo-especifico`

* Para mesclar sua branch com a main (estando dentro da sua branch): `git merge main`

* Para confirmar o merge: `git push origin suabranch`




# Node.js MVC Project

Este é um exemplo de projeto Node.js utilizando a arquitetura MVC (Model-View-Controller). O projeto usa Express para o servidor web, EJS como mecanismo de visualização e Mongoose para interação com MongoDB.

## Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/isaac-kapela/Projeto_final_toti
   cd Projeto_final_toti
   
  * npm install

  * npm init -y

  * npm install express ejs mongoose

  * npm install sqlite3



