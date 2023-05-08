# <h3> Desafio Pessoal de prova do Sicredi

Treinamento de teste front_end de cypress
```
Site utilizado: https://www.grocerycrud.com/v1.x/demo/my_boss_is_in_a_hurry/bootstrap/index.html
```
## <h3> 📃 Funcionalidades abordadas
```
Prova técnica de Automação de Teste
Desafio 1:

Observação:
O script deve executar no browser Google Chrome

Passos:

1.	Acessar a página:  https://www.grocerycrud.com/v1.x/demo/my_boss_is_in_a_hurry/bootstrap
2.	Mudar o valor da combo Select version para “Bootstrap V4 Theme”
3.	Clicar no botão Add Customer

4.	Preencher os campos do formulário com as seguintes informações:

Name: Teste Sicredi
Last name: Teste
ContactFirstName: seu nome
Phone: 51 9999-9999
AddressLine1: Av Assis Brasil, 3970
AddressLine2: Torre D
City: Porto Alegre
State: RS
PostalCode: 91000-000
Country: Brasil
from Employeer: Fixter
CreditLimit: 200

5.	Clicar no botão Save
6.	Validar a mensagem “Your data has been successfully stored into the database. 
  Edit Customer or Go back to list” através de uma asserção
7.	Fechar o browser

Desafio 2:

Observação:
O script deve executar no browser Google Chrome

Pré-condição:
Execute todos os passos do Desafio 1

Passos:

1.	Clicar no link Go back to list
2.	Clicar na coluna “Search Name” e digitar o conteúdo do Name (Teste Sicredi)
3.	Clicar no checkbox abaixo da palavra Actions
4.	Clicar no botão Delete
5.	Validar o texto “Are you sure that you want to delete this 1 item?” 
  através de uma asserção para a popup que será apresentada
6.	Clicar no botão Delete da popup, aparecerá uma mensagem dentro de um box verde na parte superior direito da tela. 
  Adicione uma asserção na mensagem “Your data has been successfully deleted from the database.”
7.	Fechar o browser


Final do Desafio!

```

## <h3> 🚀 Começando

Os tópicos abaixo vão te mostrar como instalar o projeto e executar

### <h3> 📋 Pré-requisitos
```
git
node.js
vscode
```
### <h3> 🔧 Instalação via Baixar o arquivo .ZIP

Siga as etapas para instalar corretamente

```
baixe o arquivo .ZIP
```
Localize o arquivo baixado e extraia o conteúdo:  
```
Entre na pasta extraida e vá até a pasta do projeto, apague o nome "-main", 
a pasta a ser aberta no VScode deve ter o nome de "FrontEnd_cypress"
```
Abra no VScode a pasta raiz do projeto e em seguida:  
```
npm install cypress@9.4.1
```
  
### <h3> 🔧 Instalação via GIT

Siga as etapas para instalar corretamente

```
git clone 'aqui a rota https do repositório'
```
Abra no VScode a pasta raiz do projeto e em seguida:  
```
npm install cypress@9.4.1
```


## <h3> ⚙️ Executando os testes

```
npm run cypress:open (Para rodar a suíte de testes no modo interativo)
```
```
npm run cypress:run  (Para rodar a suíte de testes em modo Headless)
```

## <h3> 🛠️ Construído com
* [Cypress](https://docs.cypress.io/) - O framework de testes

## <h4> ✒️ Autores
* **QA Automation** - *Trabalho início ao fim* - [Jader Basili](https://github.com/jabasili)

## <h4> 📄 Licença
Este projeto está sob a licença (ISC)
