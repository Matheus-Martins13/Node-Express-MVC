exports.middlewareGlobal = (req, res, next) => {
    /* if(req.body.cliente){
        req.body.cliente = req.body.cliente.replace('Martins', 'Não use Martins');  
        console.log();
        console.log(`Vi que você postou ${req.body.cliente}`);
        console.log();
    } */
    next();
}

exports.outroMiddleware = (req, res, next) => {
    next();
}
