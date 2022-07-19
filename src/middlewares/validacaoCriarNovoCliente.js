const nome = (req, res, next) => {
    const { nome } = req.body;

    if (nome.length < 8) {
 return res.status(400)
    .json({ message: 'O nome deve ter pelo menos 8 caracteres' }); 
}

    next();
};

const senha = (req, res, next) => {
    const { senha } = req.body;

    if (senha.length < 6) {
 return res.status(400)
    .json({ message: 'A senha deve ter pelo menos 6 caracteres' }); 
}

    next();
};

const email = (req, res, next) => {
    const { email } = req.body;
    const validate = /\S+@\S+\.\S+/;

    if (!validate.test(email)) {
        return res.status(400)
           .json({ message: 'O email deve ser um email válido' }); 
       }

    next();
};

module.exports = {
    nome,
    senha,
    email,
}; 