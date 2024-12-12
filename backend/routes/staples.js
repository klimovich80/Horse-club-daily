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
  validateStapleData
} = require('../middlewares/validation/staple')

// получить всех клиентов
router.get('/', getStaples);
// получить клиента по id
router.get('/:staple_id', validateStapleById, getStapleById);
// создать клиента
router.post('/', validateStapleData, createStaple);
// удалить клиента
router.delete('/:staple_id', validateStapleById, deleteStaple);
//обновить клиента
router.patch('/:staple_id', validateStapleData, updateStaple);

module.exports = router;