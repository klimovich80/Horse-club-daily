const router = require('express').Router();

const {
    getClients,
    getClientById,
    createClient,
} = require('../controllers/clients');

router.get('/', getClients);

router.get('/:client_id', getClientById);

router.post('/', createClient);

module.exports = router;
