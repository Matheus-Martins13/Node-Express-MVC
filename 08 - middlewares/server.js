const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extendes: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));

// para usar programação dentro do HTML (como no Django)
app.set('view engine', 'ejs'); 

// Nossos próprios Middlewares
// todas as requisições, em todas as rotas passam pelo middleware
app.use(middlewareGlobal); 
app.use(outroMiddleware);
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
