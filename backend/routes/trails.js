const router = require('express').Router();

const {
  getTrails,
  getTrailById,
  createTrail,
  deleteTrail,
  updateTrail
} = require('../controllers/trails');

const {
  validateTrailById,
  validateTrailAdd,
  validateTrailUpdate,
} = require('../middlewares/validation/trail');

// получить всех клиентов
router.get('/', getTrails);
// получить клиента по id
router.get('/:trail_id', validateTrailById, getTrailById);
// создать клиента
router.post('/', validateTrailAdd, createTrail);
// удалить клиента
router.delete('/:trail_id', deleteTrail);
//обновить клиента
router.patch('/:trail_id', validateTrailUpdate, updateTrail);

module.exports = router;
