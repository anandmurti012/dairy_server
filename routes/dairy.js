const express = require('express');
//instantiate a router
const router = express.Router();

// REST

//index -> display all notes of dairy
router.get('/notes', async(req, res) => {
    res.send('index route of notes');
});

//New Route
router.get('/notes/new', (req, res) => {
    res.send('form to add a new notes')
})

//Create Route
router.post('/notes', (req, res) => {
    res.send('read data from form and add to db');
})

//Show route
router.get('/notes/:id', (req, res) => {
    res.send('shows info about only one notes');
})

//Edit Route
router.get('/notes/:id/edit', (req, res) => {
    res.send('form to edit a notes')
})

//Update Route
router.patch('/notes/:id', (req, res) => {
    res.send('read data from form and update notes on db');
})

//Delete Route
router.delete('/notes/:id', (req, res) => {
    res.send('delete one notes');
})

module.exports = router;