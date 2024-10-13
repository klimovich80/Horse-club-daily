const router = require('express').Router();

const {
  getClients,
  getClientById,
  createClient,
  deleteClient,
  updateClient
} = require('../controllers/clients');

const {
  validateClientById,
  validateClientAdd,
  validateClientUpdate,
} = require('../middlewares/validation/client');

// получить всех клиентов
router.get('/', getClients);
// получить клиента по id
router.get('/:client_id', validateClientById, getClientById);
// создать клиента
router.post('/', validateClientAdd, createClient);
// удалить клиента
router.delete('/:client_id', deleteClient);
//обновить клиента
router.patch('/:client_id', validateClientUpdate, updateClient);

module.exports = router;
