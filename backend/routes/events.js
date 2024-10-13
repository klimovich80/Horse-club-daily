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
  validateEventAdd,
  validateEventUpdate
} = require('../middlewares/validation/event');

//создать событие
router.post('/', validateEventAdd, createEvent);
//обновить событие
router.patch('/:event_id', validateEventUpdate, updateEvent);
//удалить событие
router.delete('/:event_id', deleteEvent);
//получить все события
router.get('/', getEvents);
//получить событие
router.get('/:event_id', validateEventById, getEventById);

module.exports = router;