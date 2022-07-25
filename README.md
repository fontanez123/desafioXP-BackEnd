# Seja bem vindo ao meu repositório do Desafio Técnico - BackEnd!

Aqui você vai encontrar todos os detalhes de como desenvolvi esse projeto! #vqv 🚀

## Sumário

- [Tomadas de decisão](#tomadas-de-decisão)
- [Oque foi desenvolvido](#oque-foi-desenvolvido)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Requisições](#requisições)
- [Considerações Importantes](#considerações-importantes)

---

## Tomadas de decisão
<details>
<summary><strong>⚠️ Pontos importantes</strong></summary><br />

1. Gerenciamento do tempo: com o intuito de dar meu melhor nesse desáfio, pois além dele,
eu trabalho para duas empresas e tenho meu deveres com a Trybe.

2. Após leitura do desafio, decidi usar JavaScript com Node.js e Express.

3. Pensando em foco no cliente, performance e no negócio:
- Para modelagem do banco de dados implementei os conceitos de normalização e crei meu
banco de dados com MySQL.
- Utilizei Arquitetura de Software MSC(Model, Service, Controller), pois ao dividir minha aplicação
em camadas facilita a manutenção, a adição de novas funcionalidades e um código mais organizado e limpo.
- Utilizei Arquitetura Web REST.
- Implementei testes para alguns endpoints.

---

 <br />
</details>

## Oque foi desenvolvido
### Requisitos Mínimos Gerais
- [x] - POST (/investimentos/comprar)
- [x] - POST (/investimentos/vender)
- [x] - GET BY CLIENT (/ativos/{idCliente})
- [x] - GET BY ASSETS (/ativos/{idAtivo})
- [x] - POST (/conta/deposito)
- [x] - POST (/conta/saque)
- [x] - GET (/conta/{idCliente})

----
### Requisitos Adicionais
- [x] - Testes unitários
- [x] - Deploy da API
- [x] - Autenticação e autorização JWT
- [ ] - Documentação da API (Swagger)

----

## Como rodar o projeto

<details>
<summary><strong>👨🏽‍💻 Via Deploy</strong></summary><br />

1. Copie a `URL`
- https://lazaro-kabib-desafioxp-backend.herokuapp.com

2. Utilize alguma plataforma de API e rode os endpoints
- [Exemplo de requisição](https://prnt.sc/3CVRpyTPYx7f)
- Obs: confira na seção requisições os endpoints

---

 <br />
</details>

<details>
<summary><strong>👩‍ Via localmente</strong></summary><br />

1. Clone o repositório
- `git clone git@github.com:fontanez123/desafioXP-BackEnd.git`
- Entre na pasta: `cd desafioXP-BackEnd`

2. Instale as dependências
- `npm install`

3. Crie e configure o arquivo .env
```text
MYSQL_HOST=localhost
MYSQL_USER=seu-usuário
MYSQL_PASSWORD=seu-password
MYSQL_DATABASE=XPInc
PORT=3306
JWT_SECRET=senha-secreta
```

4. Criando banco de dados
- Abra o arquivo `XPInc.sql` e copie a query para criação do banco de dados
- Rode a query no MySQL Workbench

5. Rode a aplicação
- `npm start`

6. Utilize alguma plataforma de API e rode os endpoints
- [Exemplo de requisição](https://prnt.sc/kT8SD3439S0o)
- Obs: confira na seção requisições os endpoints

---

 <br />
 </details>
 
<details>
<summary><strong>👩‍🔧 Testes</strong></summary><br />

1. Nesse projeto fiz a cobertura de testes e para rodá-los bastar usar os comandos
abaixo:

- Testando camada Models: `npm run test:models`
- Testando camada Services: `npm run test:services`
- Testando camada Controllers: `npm run test:controllers`

---

 <br />
 </details>
 
 ## Requisições

<details>
<summary><strong>POST /login</strong></summary><br />

- O endpoint é acessível através do URL `/login`;
- Esse endpoint da acesso ao cliente a aplicação;
- O corpo da requisição deve seguir o formato abaixo:
```json
{
   "email": "lazarokabib94@gmail.com",
   "senha": "lazaro1234"
}
```

- Se o cliente fazer login com sucesso, o resultado retornado é parecido conforme exibido abaixo, com um status http `200`:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhemFyb2thYmliOTRAZ21haWwuY29tIwiaWF0IjoxNjU4NjcyODM2LCJleHAiOjE2NTg2NzQ2MzZ9.f602FPyIoKZSLEh7sCtLuFCus-ERFiGEM2tCRbxg9T"
}
```

  **[Validações]**
  - Os campos email ou senha não podem estar vazios.  
  - Se o cliente tem cadastro.
  
 ---

 <br />
</details>

<details>
<summary><strong>POST /conta</strong></summary><br />

- O endpoint é acessível através do URL `/conta`;
- Esse endpoint insere novo cliente na tabela clientes;
- O corpo da requisição deve seguir o formato abaixo:
```json
{
    "nome": "Josenilda Agnaldo",
    "email": "josenilda123@gmail.com",
    "senha": "josenilda1234"
}
  ```
  
  - Se o cliente criar a conta com sucesso, o resultado retornado é conforme exibido abaixo, com um status http `201`:
  ```json
{
    "id": 94,
    "nome": "Josenilda Agnaldo",
    "email": "josenilda123@gmail.com"
}
  ```
  
  **[Validações]**
  - O campo nome precisa ter mais de 7 caracteres.
  - O campo senha precisa ter mais de 5 caracteres.
  - O campo email precisa ser um email válido.
  - Verifica se o cliente já possui cadastro.  
  
  ---

 <br />
</details>

<details>
<summary><strong>GET /conta/{idCliente}</strong></summary><br />

- O endpoint é acessível através do URL `/conta/:idCliente`;
- Esse endpoint me traz id, nome e saldo do cliente;
- O resultado é conforme exibido abaixo:
```json
{
    "id": 4,
    "nome": "Lázaro Kabib",
    "saldo": "215992.00"
}
```

 **[Validações]**
  - Se o idCliente informado existe um cliente com o mesmo id.
  
  ---

 <br />
</details>

<details>
<summary><strong>GET /conta/ativos/{idCliente}</strong></summary><br />

- O endpoint é acessível através do URL `/conta/ativos/:idCliente`;
- Esse endpoint mostra carteira de ativos do cliente;
- O resultado é conforme exibido abaixo:
```json
[
    {
        "idCliente": 4,
        "idAtivo": 4,
        "quantidade": 40,
        "valor": "350.20"
    },
    {
        "idCliente": 4,
        "idAtivo": 14,
        "quantidade": 20,
        "valor": "500.00"
    }
]
```

 **[Validações]**
  - Se o idCliente informado existe um cliente com o mesmo id.
  - Verifica se o cliente possui ativos comprados.
  
  ---

 <br />
</details>

<details>
<summary><strong>POST /conta/deposito</strong></summary><br />

- O endpoint é acessível através do URL `/conta/deposito`;
- Esse endpoint insere nova transação do tipo depósito na tabela transacoesConta e atualiza o saldo do cliente;
- O corpo da requisição deve seguir o formato abaixo:
```json
{
    "idCliente": 4,
    "valor": 10000
}
  ```
  
  - Se o cliente fizer o depósito com sucesso, o resultado retornado é conforme exibido abaixo, com um status http `200`:
  ```json
{
    "idCliente": 4,
    "tipo": "deposito",
    "valor": 1000
}
  ```
  
  **[Validações]**
  - Se o token de autenticação existe.
  - Se o token de autenticação expirou ou é inválido.
  - Se o cliente que fez o login é o mesmo que está realizando o depósito.
  - Se o idCliente do req.body não está vazio ou é maior que 0.
  - Se o idCliente do req.body é um número.
  - Se existe um cliente com o mesmo idCliente passado no req.body.
  - Se o valor do req.body é maior que 0.
  - Se o valor do req.body é um número.
  
  ---

 <br />
</details>

<details>
<summary><strong>POST /conta/saque</strong></summary><br />

- O endpoint é acessível através do URL `/conta/saque`;
- Esse endpoint insere nova transação do tipo saque na tabela transacoesConta e atualiza o saldo do cliente;
- O corpo da requisição deve seguir o formato abaixo:
```json
{
    "idCliente": 4,
    "valor": 10000
}
  ```
  
  - Se o cliente fizer o saque com sucesso, o resultado retornado é conforme exibido abaixo, com um status http `200`:
  ```json
{
    "idCliente": 4,
    "tipo": "saque",
    "valor": 1000
}
  ```
  
  **[Validações]**
  - Se o token de autenticação existe.
  - Se o token de autenticação expirou ou é inválido.
  - Se o cliente que fez o login é o mesmo que está realizando o saque.
  - Se o idCliente do req.body não está vazio ou é maior que 0.
  - Se o idCliente do req.body é um número.
  - Se existe um cliente com o mesmo idCliente passado no req.body.
  - Se o valor do req.body é maior que 0.
  - Se o valor do req.body é um número.
  - Se o valor do saque é menor que o saldo do cliente.
  
  ---

 <br />
</details>

<details>
<summary><strong>GET /ativos</strong></summary><br />

- O endpoint é acessível através do URL `/ativos`;
- Esse endpoint mostra todos os ativos disponíveis na corretora
- O resultado é conforme exibido abaixo:
```json
[
    {
        "id": 4,
        "nome": "VALE",
        "quantidade": 150,
        "valor": "350.20"
    },
    {
        "id": 14,
        "nome": "PETROBRAS",
        "quantidade": 380,
        "valor": "500.00"
    },
    {
        "id": 24,
        "nome": "MAGAZINE LUIZA",
        "quantidade": 150,
        "valor": "250.70"
    },
    {
        "id": 34,
        "nome": "LOJAS RENNER",
        "quantidade": 249,
        "valor": "321.30"
    },
    {
        "id": 44,
        "nome": "HAPVIDA",
        "quantidade": 334,
        "valor": "446.00"
    }
]
```
  
  ---

 <br />
</details>

<details>
<summary><strong>GET /ativos/{idAtivo}</strong></summary><br />

- O endpoint é acessível através do URL `/ativos/:idAtivo`;
- Esse endpoint me traz id, nome, quantidade e valor do Ativo disponível na corretora pelo id
- O resultado é conforme exibido abaixo:
```json
{
    "id": 4,
    "nome": "VALE",
    "quantidade": 150,
    "valor": "350.20"
}
```

 **[Validações]**
  - Se o idAtivo informado existe um ativo com o mesmo id.
  
  ---

 <br />
</details>

<details>
<summary><strong>POST /investimentos/comprar</strong></summary><br />

- O endpoint é acessível através do URL `/investimentos/comprar`;
- Esse endpoint insere uma transação de ativos na tabela trasancoesAtivos, atualiza o saldo do cliente, atualiza a carteira de ativos do cliente
e atualiza a quantidade de ativos disponíveis na corretora.
- O resultado é conforme exibido abaixo:
```json
{
    "idCliente": 4,
    "idAtivo": 4,
    "tipo": "compra",
    "quantidade": 10
}
```

 **[Validações]**
  - Se o token de autenticação existe.
  - Se o token de autenticação expirou ou é inválido.
  - Se o valor da compra é maior que o saldo do cliente.
  - Se a quantidade comprada é maior que a quantidade disponível na corretora.
  - Se o cliente que fez o login é o mesmo que está realizando a compra do ativo.
  - Se o idCliente do req.body não está vazio ou é maior que 0.
  - Se o idCliente do req.body é um número.
  - Se existe um cliente com o mesmo idCliente passado no req.body.
  - Se o idAtivo do req.body não está vazio ou é maior que 0.
  - Se o idAtivo do req.body é um número.
  - Se existe um ativo com o mesmo idAtivo passado no req.body.
  - Se a quantidade do req.body é um número.
  - Se a quantidade do req.body é maior que 0.
  
  ---

 <br />
</details>

<details>
<summary><strong>POST /investimentos/vender</strong></summary><br />

- O endpoint é acessível através do URL `/investimentos/vender`;
- Esse endpoint insere uma transação de ativos na tabela trasancoesAtivos, atualiza o saldo do cliente, atualiza a carteira de ativos do cliente
e atualiza a quantidade de ativos disponíveis na corretora.
- O resultado é conforme exibido abaixo:
```json
{
    "idCliente": 4,
    "idAtivo": 4,
    "tipo": "venda",
    "quantidade": 30
}
```

 **[Validações]**
  - Se o token de autenticação existe.
  - Se o token de autenticação expirou ou é inválido.
  - Se a quantidade vendida é maior que a quantidade disponível na carteira de ativos do cliente.
  - Se o cliente que fez o login é o mesmo que está realizando a compra do ativo.
  - Se o idCliente do req.body não está vazio ou é maior que 0.
  - Se o idCliente do req.body é um número.
  - Se existe um cliente com o mesmo idCliente passado no req.body.
  - Se o idAtivo do req.body não está vazio ou é maior que 0.
  - Se o idAtivo do req.body é um número.
  - Se existe um ativo com o mesmo idAtivo passado no req.body.
  - Se a quantidade do req.body é um número.
  - Se a quantidade do req.body é maior que 0.
  
  ---

 <br />
</details>

## Considerações Importantes

Agradeço a oportunidade de participar desse processo seletivo. Com ele conseguir
praticar os conteúdos aprendido durante o curso e também adquirir novos aprendizados.

Melhorias para o futuro:
- Refatorar algumas partes do meu código.
- Melhorar a cobertura de testes.
- Documentação swagger

---
