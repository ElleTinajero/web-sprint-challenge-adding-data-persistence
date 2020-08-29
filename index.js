const express = require("express")
const server = express()
const projectRouter = require("./routers/project-router")

server.use(express.json())
server.use(projectRouter)

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})


