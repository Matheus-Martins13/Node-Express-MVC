const express = require('express');
const app = express();

// Essa configuração precisa ser feita para usar o body do post
// Se não fizer isso, nenhum post será tratado. 
app.use(express.urlencoded({ extendes: true }));

// hhtp://facebook.com/profiles/5 -> url paramms
// hhtp://facebook.com/profiles/5?campanha=googleads -> query string 
//  --> A query string é um conjunto de ?chave=valor
// /5?campanha=googleads&nome_campanha=seila -> mais query string

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    Outro campo: <input type="text" name="outro">
    <button>Enviar form</button>
    </form>
    `);
});
/**
 * Quando utilizamos a notação app.get('/testes/:idUsuarios', 
 * a rota /testes passa a ter, obrigatoriamente, que possuir 
 * um parâmetro de idUsuario. Para que isso não seja obriga-
 * tório, basta colocar um '?' ao final do nome da chave do 
 * parâmetro. 
 * 
 * OBS.: Os parâmetros são chaves e valor. O valor é o que será 
 * inserido na URL, a chave é o nome que damos àquele param. 
 * 
 * Com query strings: 
 * - valor da url: http://localhost:3000/testes/?nome=Matheus&sobrenome=Martins&idade=20
 * - valor recebido: { nome: 'Matheus', sobrenome: 'Martins', idade: '20' }
 * 
 * No post, as informações são passadas através do body da requisição
*/

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    // res.send(req.params); // será mostrado como um json
    console.log(req.query);
    res.send(req.query.nome);
});

app.post('/', (req, res) => {
    console.log(req.body);
    // O que será usado é o name do formulário
    res.send(`O que você me enviou foi ${req.body.nome} e ${req.body.outro}`);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
