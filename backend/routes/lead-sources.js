const router = require('express').Router();

const {
  getLeadSources,
  getLeadSourceById,
  createLeadSource,
  deleteLeadSource,
  updateLeadSource
} = require('../controllers/lead-sources');

const {
  validateLeadSourceById,
  validateLeadSourceAdd,
  validateLeadSourceUpdate,
} = require('../middlewares/validation/lead-source');

// получить всех клиентов
router.get('/', getLeadSources);
// получить клиента по id
router.get('/:leadSource_id', validateLeadSourceById, getLeadSourceById);
// создать клиента
router.post('/', validateLeadSourceAdd, createLeadSource);
// удалить клиента
router.delete('/:leadSource_id', deleteLeadSource);
//обновить клиента
router.patch('/:leadSource_id', validateLeadSourceUpdate, updateLeadSource);

module.exports = router;
