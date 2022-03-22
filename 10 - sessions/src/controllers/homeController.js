exports.paginaIicial = (req, res) => {
    /* 
    Ao ativar as sessions, podemos usar esse recurso:
    req.session.usuario = {
        nome: 'Matheus',
        logado: true
    } 
    Mesmo após apagar, isso ficará salvo por 7 dias na nossa base de dados
    Quando a sessão encerrar, isso será apagado
    console.log(req.session.usuario);
    */
    console.log(req.flash('error'), req.flash('success'), req.flash('info'));
    res.render('index');
    return 
}

exports.trataPost = (req, res, next) => {
    res.send(req.body);
    return;
}
