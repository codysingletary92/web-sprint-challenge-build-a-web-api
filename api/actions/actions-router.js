// Write your "actions" router here!
const express = require('express');
const Actions = require('./actions-model')



const router = express.Router();
router.use(express.json())

router.get('/', (req, res) => {
    Actions.get()
    .then( action => res.status(200).json(action))
    .catch(err => res.status(400).send(json(err)))
})

router.get('/:id', (req, res) => {
    Actions.get(req.params.id)
    .then( action => res.status(200).json(action))
    .catch( err => res.status(500).send(json(err)))
})

router.post('/', (req, res) => {
    Actions.insert(req.body)
    .then(() => res.status(201).send(json(req.body)))
    .catch( err => res.status(400).send(json(err)))
})

router.put('/:id', (req, res) => {
    Actions.update(req.params.id, req.body)
    .then(action => res.status(202).send(json(action, 'updated')))
    .catch(err => res.status(400).send(json(err)))
})

router.delete('/:id', (req, res) => {
    Actions.remove(req.params.id)
    .then(() => res.status(202))
    .catch(err => res.status(500).send(json(err)))
})



module.exports = router;
