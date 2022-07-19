const validacaoDeposito = (req, res, next) => {
    const { valor } = req.body;

    if(valor <= 0) {
        const message = 'Quantidade a ser depositada não pode ser negativa ou igual a zero.';
        return res.status(400).json({ message });
    }

    if(typeof valor !== 'number') {
        const message = 'O valor precisa ser um número';
        return res.status(400).json({ message });
    };

    next();
};

module.exports = validacaoDeposito;