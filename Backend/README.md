
# Documentação da API

## Guia de desenvolvimento
Incialmente para rodar o backend da aplicação é precisa estar rodando a API da Hathor. Para isso, siga os passos da documentação a seguir:
https://hathor.gitbook.io/hathor/guides/headless-wallet/install-from-source-code


Para rodar o backend da aplicação, siga os seguintes passos:

1. Certifique-se de ter o NestJS instalado em sua máquina. Você pode verificar se o NestJS está instalado executando o seguinte comando no terminal:
```
nest -v
```
Se o NestJS não estiver instalado, faça o download através do seguinto comando no terminal:
```
npm install -g @nestjs/cli
```

2. Navegue até o diretório "backend" no terminal e instale as dependências do projeto usando o gerenciador de pacotes NPM (Node Package Manager):
```
npm install
```
3. Crie um arquivo .env na raiz do diretório "backend" e adicione as seguintes variáveis de ambiente:
```env
MONGODB_URI=
HATHOR_URI=
HATHOR_WALLET_ID=
```

4. Inicie o servidor de desenvolvimento do backend executando o seguinte comando:
```
npm run start:dev
```

5. Agora, você pode acessar a API em http://localhost:4000.

## Rotas
### Solciita a verificação o login do usuário

```http
  GET /user/login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório** |
| `senha` | `string` | **Obrigatório** |

##### Expected response
```json
    {
        "id": "645740f2763bda189ff362ba"
    }
```

### Solicita a criação de um usuário

```http
  POST /user
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório** |
| `email`      | `string` | **Obrigatório** |
| `cpf`      | `string` | **Obrigatório** |
| `address`      | `string` | **Obrigatório** |
| `password`      | `string` | **Obrigatório** |

##### Expected response
```json
    {
        "status": 200,
        "message": "User created succesfully"
    }
    
```

### Solicita a criação do token para o usuário
```http
  POST /user/createToken
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `tokenName` | `string` | **Obrigatório** |
| `tokenSymbol` | `string` | **Obrigatório** |
| `tokenAmount` | `number` | **Obrigatório** |

##### Expected response
```json
    {
        "status": 200,
        "message": "Token created"
    }
```
