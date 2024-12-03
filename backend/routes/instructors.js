const router = require('express').Router();

const {
  getInstructors,
  getInstructorById,
  createInstructor,
  deleteInstructor,
  updateInstructor
} = require('../controllers/instructors');

const {
  validateInstructorById,
  validateInstructorAdd,
  validateInstructorUpdate,
} = require('../middlewares/validation/instructor');

// получить всех клиентов
router.get('/', getInstructors);
// получить клиента по id
router.get('/:instructor_id', validateInstructorById, getInstructorById);
// создать клиента
router.post('/', validateInstructorAdd, createInstructor);
// удалить клиента
router.delete('/:instructor_id', deleteInstructor);
//обновить клиента
router.patch('/:instructor_id', validateInstructorUpdate, updateInstructor);

module.exports = router;
