var express = require('express');
var router = express.Router();
const todoController = require('../controllers/todoController');
var authHelper = require('../helpers/authHelper')

/* GET users listing. */
router.get('/', authHelper.isLogin, authHelper.isUserAuth, todoController.getAllToDos);

router.post('/', authHelper.isLogin, authHelper.isUserAuth, todoController.addToDos)

router.delete('/:todosId', authHelper.isLogin, authHelper.isUserAuth, todoController.deleteTodos)

router.put('/:todosId', authHelper.isLogin, authHelper.isUserAuth, todoController.updateTodos)

module.exports = router;
