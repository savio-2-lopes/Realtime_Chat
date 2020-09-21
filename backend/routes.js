const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('servidor rodando com sucesso');
});

module.exports = router;