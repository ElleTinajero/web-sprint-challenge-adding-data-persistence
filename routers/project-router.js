const express = require("express")
const db = require("./project-model")

const router = express.Router()

router.get('/projects', async (req, res, next) => {
    try {
        const data = await db.getProjects()
        res.json(data)
    }
    catch (err) {
        next(err)
    }
})

router.get('/resources', async (req, res, next) => {
    try {
        const data = await db.getResources()
        res.json(data) 
    }
    catch (err) {
        next(err)
    }
})

router.get('/:id/tasks', async (req, res, next) => {
    const { id } = req.params
    try {
        const data = await db.getTasks(id)
        res.json(data)
    }
    catch (err) {
        next(err)
    }
})

router.post('/resources', async (req, res, next) => {
    try {
        const newResource = req.body;
        const data = await db.addResource(newResource)
        res.json(data)
    }
    catch (err){
        next(err)
    }
})

router.post('/projects', async (req, res, next) => {
    try {
        const newProject = req.body;
        const data = await db.addProject(newProject)
        res.json(data)
    }
    catch (err){
        next(err)
    }
})

router.post('/tasks', async (req, res, next) => {
    try {
        const newTask = req.body;
        const data = await db.addTask(newTask)
        res.json(data)
    }
    catch (err){
        next(err)
    }
})

module.exports = router;