const express = require('express');
const server = express();

server.use(express.json())

const actionsRoutes = require('./actions/actions-router');
const projectsRoutes = require('./projects/projects-router');

// server.use('/actions', actionsRoutes)
// server.use('/projects', projectsRoutes)

server.get('/', (req, res) => {
    res.send(`<h1>Server working</h1>`)
})

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
