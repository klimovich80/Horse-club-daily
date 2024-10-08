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
router.get('/:id', getRecordById); // get record by id
router.post('/', createRecord); // create record
router.patch('/:id', updateRecord); // update record
router.delete('/:id', deleteRecord); // delete record
//экспортируем маршруты
module.exports = router;