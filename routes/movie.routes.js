const express = require('express');
const MovieController = require('../controller/movieController');
const router = express.Router();

router.get('/', MovieController.list);
router.get('/add', MovieController.showAddForm);
router.post('/add', MovieController.add);
router.get('/edit/:id', MovieController.showEditForm);
router.post('/edit/:id', MovieController.edit);
router.post('/delete/:id', MovieController.deleteMovie);

module.exports = router;
