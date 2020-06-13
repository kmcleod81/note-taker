const router = require('express').Router();

// require express

// require the class file so you can use the functions you created

// GET request for /api/notes
// call the getNotes() from the class you required
// res.json(note)

// POST request for /api/notes
// call the addNotes() from the class you required
// res.json(note)

// DELETE request for /api/notes
// call the addNotes() from the class you required
// res.json(note)

//Use this maybe for dry code?
app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})

// delete request for api/notes/:id
// call the deleteNote() function


module.exports = router;