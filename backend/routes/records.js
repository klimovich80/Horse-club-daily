const router = require('express').Router();
// подключаем контроллеры
const {
  getRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord
} = require('../controllers/records');
// подключаем маршруты
router.get('/', getRecords); // get all records
router.get('/:record_id', getRecordById); // get record by id
router.post('/', createRecord); // create record
router.patch('/:record_id', updateRecord); // update record
router.delete('/:record_id', deleteRecord); // delete record
//экспортируем маршруты
module.exports = router;