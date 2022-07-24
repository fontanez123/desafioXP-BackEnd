# Seja bem vindo ao meu repositório do Desafio Técnico - BackEnd!

Aqui você vai encontrar todos os detalhes de como desenvolvi esse projeto! #vqv 🚀

## Sumário

- [Tomadas de decisão](#tomadas-de-decisão)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Requisições](#requisições)
- [Considerações Importantes](#considerações-importantes)

## Tomadas de decisão
<details>
<summary><strong>⚠️ Pontos importantes</strong></summary><br />

blblabla blblabla blblabla blblabla blblabla

 <br />
</details>


## Como rodar o projeto

<details>
<summary><strong>👨🏽‍💻 Via Deploy</strong></summary><br />

blblabla blblabla blblabla blblabla blblabla

 <br />
</details>

<details>
<summary><strong>👩‍ Via localmente</strong></summary><br />

blblabla blblabla blblabla blblabla blblabla

 <br />
 </details>
 
<details>
<summary><strong>👩‍🔧 Testes</strong></summary><br />

blblabla blblabla blblabla blblabla blblabla

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

blblabla blblabla blblabla blblabla blblabla

 <br />
</details>

<details>
<summary><strong>GET /ativos/{idAtivo}</strong></summary><br />

blblabla blblabla blblabla blblabla blblabla

 <br />
</details>

<details>
<summary><strong>POST /investimentos/comprar</strong></summary><br />

blblabla blblabla blblabla blblabla blblabla

 <br />
</details>

<details>
<summary><strong>POST /investimentos/vender</strong></summary><br />

blblabla blblabla blblabla blblabla blblabla

 <br />
</details>

## Considerações Importantes
