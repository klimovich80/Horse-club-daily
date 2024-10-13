const router = require('express').Router();

const {
  getStaples,
  getStapleById,
  createStaple,
  deleteStaple,
  updateStaple
} = require('../controllers/staples');

const {
  validateStapleById,
  validateStapleAdd,
  validateStapleUpdate
} = require('../middlewares/validation/staple')

// получить всех клиентов
router.get('/', getStaples);
// получить клиента по id
router.get('/:staple_id', validateStapleById, getStapleById);
// создать клиента
router.post('/', validateStapleAdd, createStaple);
// удалить клиента
router.delete('/:staple_id', deleteStaple);
//обновить клиента
router.patch('/:staple_id', validateStapleUpdate, updateStaple);

module.exports = router;