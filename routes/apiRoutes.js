const router = require('express').Router();
const notebook = require('../db/Notebook');
// require express

// require the class file so you can use the functions you created

// GET request for /api/notes
// call the getNotes() from the class you required
// res.json(note)

router.get('/notes', function (req, res) {
    notebook.getNotes()
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
});

// POST request for /api/notes
// call the addNotes() from the class you required
// res.json(note)

router.post('/notes', function (req, res) {
    notebook.addNotes(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
});

// DELETE request for /api/notes
// call the addNotes() from the class you required
// res.json(note)

router.delete('/notes/:id', function (req, res) {
    notebook.deleteNotes(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
});

// delete request for api/notes/:id
// call the deleteNote() function


module.exports = router;