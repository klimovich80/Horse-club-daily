const router = require('express').Router();

const {
  getHorses,
  getHorseById,
  createHorse,
  deleteHorse
} = require('../controllers/horses');

//получение всех лошадей с сервера
router.get('/', getHorses);

//получение лошади по id
router.get('/:horse_id', getHorseById);

//создание лошади
router.post('/', createHorse);

//удаление лошади
router.delete('/:horse_id', deleteHorse);

module.exports = router;
