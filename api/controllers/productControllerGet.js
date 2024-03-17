const db = require('../db');

const productControllerGet = (req, res) => {
    db.query('SELECT * FROM produtos', (error, results) => {
        if (error) {
            console.error('Erro ao obter produtos do banco de dados:', error);
            res.status(500).json({ error: 'Erro ao obter produtos' });
            return;
        }
        res.status(200).json(results);
    });
};

module.exports =  productControllerGet;