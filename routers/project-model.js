const db = require('../data/config')

function findById(id) {
    return db("Projects")
        .where({ id })
        .first()
}

function getResources() {
    return db("Resources")
}

function addResource(resource) {
    return db("Resources")
        .insert(resource)
        .then(id => { 
            return findById(id[0])
        });
}

function getProjects() {
    return db("Projects")
}

function addProject(project) {
    return db("Projects")
        .insert(project)
        .then(id => { 
            return findById(id[0])
        });
}

function getTasks(project_id) {
    return db("Tasks as t")
            .join("Projects as p", "p.id","t.id" )
            .select("p.projectName", "p.projectDescription", "t.taskDecription", "t.taskNotes", "t.taskCompletion")
            .where({ project_id })
} 

function addTask(task) {
    return db("Tasks")
        .insert(task)
        .then(id => { 
            return findById(id[0])
        });
}

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks
}