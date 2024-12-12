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
  validateHorseData
} = require('../middlewares/validation/horse')

//получение всех лошадей с сервера
router.get('/', getHorses);

//получение лошади по id
router.get('/:horse_id', validateHorseById, getHorseById);

//создание лошади
router.post('/', validateHorseData, createHorse);

//удаление лошади
router.delete('/:horse_id', validateHorseById, deleteHorse);

//обновление лошади
router.patch('/:horse_id', validateHorseData, updateHorse);

module.exports = router;
