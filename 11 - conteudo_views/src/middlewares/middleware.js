exports.middlewareGlobal = (req, res, next) => {
    // para injetar dados em todas as rotas de uma só vez
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
    next();
}

exports.outroMiddleware = (req, res, next) => {
    next();
}
