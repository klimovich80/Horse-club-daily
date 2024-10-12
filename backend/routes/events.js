const router = require('express').Router();

const { model } = require('mongoose');
const {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents,
  getEvent
} = require('../controllers/events');
//создать событие
router.post('/', createEvent);
//обновить событие
router.patch('/:event_id', updateEvent);
//удалить событие
router.delete('/:event_id', deleteEvent);
//получить все события
router.get('/', getEvents);
//получить событие
router.get('/:event_id', getEvent);

module.exports = router;