const router = require('express').Router();

const {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents,
  getEventById
} = require('../controllers/events');

const {
  validateEventById,
  validateEventData
} = require('../middlewares/validation/event');

//создать событие
router.post('/', validateEventData, createEvent);
//обновить событие
router.patch('/:event_id', validateEventData, updateEvent);
//удалить событие
router.delete('/:event_id', validateEventById, deleteEvent);
//получить все события
router.get('/', getEvents);
//получить событие
router.get('/:event_id', validateEventById, getEventById);

module.exports = router;