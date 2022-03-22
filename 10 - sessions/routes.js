const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

/**
 * Estamos trabalhando com o modelo full mvc, o que 
 * significa que será só um projeto para front-end
 * e back-end. Em outros modelos, podemos separar 
 * o front do back, para que o back fique livre para 
 * ser utilizado em uma aplicação mobile, por exemplo.
 * 
 * Este arquivo será responsável somente pelas rotas. 
 * Para cada coisa na aplicação, um controller deve 
 * ser criado. 
*/

// rotas da home
route.get('/', homeController.paginaIicial); // só passa a referência
route.post('/', homeController.trataPost);

// rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;
