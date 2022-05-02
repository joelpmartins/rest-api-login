# API REST MongoDB

API REST para registro e login de usuários, construída com MongoDB, Express.js e Node.js.

</br>

## Como configurar o arquivo .env

Para a API funcionar preencha todos campos abaixo.

```sh
PORT= <Adicione a porta de conexão>
DB_URL= <Adiciona a URL para conexão com o banco de dados com usuário e senha>
SECRET= <Crie um valor secreto para sessão>
```

</br>

## Como testar a API

Após iniciar o servidor local você pode testar a API com o programa Postman ou Insomnia.

#### Cadastro (POST):
http://localhost:{porta}/register

```sh
{
  "name": "Seu nome",
  "email": "examplo@exemplo.com",
  "password": "exemplo123",
  "confirmpassword": "exemplo123"
}
```

#### Login (POST):
http://localhost:{porta}/login

```sh
{
  "email": "examplo@exemplo.com",
  "password": "exemplo123",
}
```
