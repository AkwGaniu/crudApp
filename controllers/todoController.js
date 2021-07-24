const createError = require('http-errors')
const { Todo } = require('../model/todo_model')

module.exports.create = (req, resp, next) => {
	try {
		const title = req.body.title
		if (!title) return next(createError(400, 'Invalid parameter'))
		new Todo({ title: req.body.title }).save((err, data) => {
			if (err) return next(createError(500, err))
			return resp.status(200).json({status: 200, message: 'Todo added successfully', data: data})
		})
	} catch (error) {
		return next(createError(500, error.toString()))
	}
}

module.exports.fetch_todo = (req, resp, next) => {
	try {
		Todo.find({}, (err, data) => {
			if (err) return next(createError(500, err)) 
			return resp.status(200).json({status: 200, message: 'Success', data: data})
		})        
	} catch (error) {
		return next(createError(500, error))
	}
}

module.exports.delete_todo = (req, resp, next) => {
	try {
		const todoId = req.params.id
		if (!todoId) {
			return next(createError(400, 'Invalid parameter'))
		} else {
			Todo.findByIdAndDelete(req.params.id, (err, data) => {
				if (err) return next(createError(400, err.toString()))
				return resp.status(200).json({status: 200, message: 'Todo deleted successfully'})				
			})
		}
	} catch(error) {
		return next(createError(500, error))
	}
}

module.exports.update_todo = (req, resp, next) => {
	try {
		const todoId = req.body.todoId
		const title = req.body.title
		const completed = req.body.completed
		if (!todoId || !title) {
			return next(createError(400, 'Invalid parameter(s)'))
		} else {
			const update = {
				title: title,
				completed: completed
			}
			Todo.findByIdAndUpdate(todoId, update, {new: true}, (err, data) => {
				if (err) next(createError(422, err))
				resp.status(200).json({ status: 200, message: 'Todo updated successfully', data: data })
			})
		}
	} catch (error) {
		next(createError(500, error))
	}
}