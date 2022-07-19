const cliente = (req, res, next) => {
    const { idCliente } = req.body;

    if(!idCliente || idCliente <= 0) {
        const message = 'O campo idCliente é obrigatório ou precisa ser um número maior que 0';
        return res.status(400).json({ message });
    };

    if(typeof idCliente !== 'number') {
        const message = 'O campo idCliente precisa ser um número';
        return res.status(400).json({ message });
    };

    next();
};

const ativo = (req, res, next) => {
    const { idAtivo } = req.body;

    if(!idAtivo || idAtivo <= 0) {
        const message = 'O campo idAtivo é obrigatório ou precisa ser um número maior que 0';
        return res.status(400).json({ message });
    };

    if(typeof idAtivo !== 'number') {
        const message = 'O campo idAtivo precisa ser um número';
        return res.status(400).json({ message });
    };

    next();
};

module.exports = {
    cliente,
    ativo,
};