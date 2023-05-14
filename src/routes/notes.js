const express = require('express');
const router = express.Router();
const Note = require('./../models/note.js');

router.get('/list/:userid', async function (req, res) {
    var notes = await Note.find({ userId: req.params.userid });
    res.json(notes);
});

router.get('/list', async function (req, res) {
    var notes = await Note.find();
    res.json(notes);
});

router.post('/add', async function (req, res) {
    console.log(req);

    const myNote = new Note({
        id: req.body.id,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content
    });
    await myNote.save();
    const response = { statusCode: 200, message: "Added Successfully" };
    res.json(response);
});

module.exports = router;