const router = require('express').Router();

const {
  createUser,
  updateUser,
  getUsers,
  getUserById,
  deleteUser
} = require('../controllers/users');

const {
  validateUserRegistration,
  validateUserUpdate,
  validateUserById
} = require('../middlewares/validation/user');

//получить всех пользователей из БД
router.get('/', getUsers);
//получить одного пользователя из БД по id
router.get('/:user_id', validateUserById, getUserById);
//добавить пользователя в БД
router.post('/', validateUserRegistration, createUser);
//удалить пользователя из БД по id
router.delete('/:user_id', deleteUser);
//обновить пользователя в БД по id
router.patch('/:user_id', validateUserUpdate, updateUser);
//экспортировать модель
module.exports = router;


