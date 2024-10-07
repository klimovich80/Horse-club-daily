const router = require('express').Router();

const {
  getClients,
  getClientById,
  createClient,
  deleteClient,
  updateClient
} = require('../controllers/clients');
// получить всех клиентов
router.get('/', getClients);
// получить клиента по id
router.get('/:client_id', getClientById);
// создать клиента
router.post('/', createClient);
// удалить клиента
router.delete('/:client_id', deleteClient);
//обновить клиента
router.patch('/:client_id', updateClient);

module.exports = router;
