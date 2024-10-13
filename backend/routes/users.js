const router = require('express').Router();

const {
  createUser,
  updateUser,
  getUsers,
  getUserById,
  deleteUser
} = require('../controllers/users');

//получить всех пользователей из БД
router.get('/', getUsers);
//получить одного пользователя из БД по id
router.get('/:user_id', getUserById);
//добавить пользователя в БД
router.post('/', createUser);
//удалить пользователя из БД по id
router.delete('/:user_id', deleteUser);
//обновить пользователя в БД по id
router.patch('/:user_id', updateUser);
//экспортировать модель
module.exports = router;


