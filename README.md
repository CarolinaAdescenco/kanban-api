# Kanban Ada Tech

API e Front de Kanban desenvolvido utilizando Node.js e React.

## API

A API foi desenvolvida utilizando 
- Node.js + Express
- SQLite3 e TypeORM para persistência de dados
- Lib BCrypt para Criptografia de senha do usuário


Para iniciar a API basta rodar os comandos:

Instalar as dependências

```bash
npm install
```

Criar as tabelas

```bash
npm run typeorm migration:run
```

Iniciar a aplicação

```bash
npm start
```

Para criar um usuário acesse o endpoint e insira login e senha

```bash
http://localhost:5000/login/signup
```

## Frontend

Instalar as dependências

```bash
npm install
```
Iniciar a aplicação

```bash
npm start
```



## Considerações Finais

Meu foco profissional até momento foi em stacks frontend.

Então para esse desafio me dediquei na criação da API, até como um desafio pessoal :)

Por conta disso, o não tive tempo de implementar no front alguns itens que gostaria, como:

- Redux para gerenciamento de estado dos componentes
- Publicar em algum local
- Criar componentes mais desaclopados e reutilizáveis
