const router = require('express').Router();

const {
  getStaples,
  getStapleById,
  createStaple,
  deleteStaple,
  updateStaple
} = require('../controllers/staples');
// получить всех клиентов
router.get('/', getStaples);
// получить клиента по id
router.get('/:staple_id', getStapleById);
// создать клиента
router.post('/', createStaple);
// удалить клиента
router.delete('/:staple_id', deleteStaple);
//обновить клиента
router.patch('/:staple_id', updateStaple);

module.exports = router;


//TODO:
// подключить валидацию данных