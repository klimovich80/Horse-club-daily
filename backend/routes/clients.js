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
  validateClientData
} = require('../middlewares/validation/client');

// получить всех клиентов
router.get('/', getClients);
// получить клиента по id
router.get('/:client_id', validateClientById, getClientById);
// создать клиента
router.post('/', validateClientData, createClient);
// удалить клиента
router.delete('/:client_id', validateClientById, deleteClient);
//обновить клиента
router.patch('/:client_id', validateClientData, updateClient);

module.exports = router;
