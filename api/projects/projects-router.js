// Write your "projects" router here!
const express = require('express');
const Projects = require('./projects-model')
const { logger, validateUserId, validateUser, validatePost } = require('../middleware/middleware')



const router = express.Router();
router.use(express.json())



router.get('/', (req, res) => {
    Projects.get()
    .then( project => res.status(200).json(project))
    .catch(err => res.status(400).json(err))
})

router.get('/:id', (req, res) => {
    Projects.get(req.params.id)
    .then( project => {
        console.log(project)
        if (project === null){
           
           return res.status(404).send('proejct not found')
        } 
        return res.status(200).json(project)
    })
    .catch( err => res.status(500).json(err))
})

router.post('/', (req, res) => {
    console.log(req.body.name === undefined)
    console.log(req.body.description === undefined)

    if (req.body.description === undefined){
        console.log('here?')
        res.status(400)
    }

    Projects.insert(req.body)
    .then(proejct => res.status(201).json(req.body)
    )
    .catch( err => res.status(500).json(err))
})

router.put('/:id', (req, res) => {
    Projects.update(req.params.id, req.body)
    .then(project => res.status(202).json(project, 'updated'))
    .catch(err => res.status(400).json(err))
})

router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
    .then(() => res.status(202))
    .catch(err => res.status(500).json(err))
})

router.get('/:id/actions', (req, res) => {
    Projects.getProjectActions(req.params.id)
    .then( actions => res.status(200).json(actions))
    .catch(err => res.status(400).json(err))
})

module.exports = router;