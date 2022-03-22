const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE  

// http://meuseite.com/ <- GET -> Entregue a página /
// http://meuseite.com/sobre <- GET -> Entregue a página /sobre
// http://meuseite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosto!');
})

/* 
Uma porta é referente a um processo que está sendo executado
no seu servidor. Se houver alguma coisa em determinada porta 
em seu servidor e tentar acessar essa porta, o express vai 
dar um erro. Usamo portas que não são muito utilizadas. 
*/

// "escute na porta 3000"
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
