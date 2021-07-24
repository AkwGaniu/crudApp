const router = require('express').Router()

const controller = require('../controllers/todoController')

router.get('/', controller.fetch_todo)
router.post('/add_todo',  controller.create)
router.put('/update_todo', controller.update_todo)
router.delete('/delete_todo/:id', controller.delete_todo)


module.exports = router