const router = require('express').Router();

const {
  getHorses,
  getHorseById,
  createHorse,
  deleteHorse,
  updateHorse
} = require('../controllers/horses');

const {
  validateHorseById,
  validateHorseAdd,
  validateHorseUpdate
} = require('../middlewares/validation/horse')

//получение всех лошадей с сервера
router.get('/', getHorses);

//получение лошади по id
router.get('/:horse_id', validateHorseById, getHorseById);

//создание лошади
router.post('/', validateHorseAdd, createHorse);

//удаление лошади
router.delete('/:horse_id', deleteHorse);

//обновление лошади
router.patch('/:horse_id', validateHorseUpdate, updateHorse);

module.exports = router;
