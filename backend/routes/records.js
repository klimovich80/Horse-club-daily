const router = require('express').Router();
// подключаем контроллеры
const {
  getRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord
} = require('../controllers/records');

const {
  validateRecordById,
  validateRecordAdd,
  validateRecordUpdate
} = require('../middlewares/validation/record');
// подключаем маршруты
router.get('/', getRecords); // get all records
router.get('/:record_id', validateRecordById, getRecordById); // get record by id
router.post('/', validateRecordAdd, createRecord); // create record
router.patch('/:record_id', validateRecordUpdate, updateRecord); // update record
router.delete('/:record_id', deleteRecord); // delete record
//экспортируем маршруты
module.exports = router;