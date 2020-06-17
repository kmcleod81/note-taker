const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const db = path.join(__dirname, "../db/db.json");

// require express

// require the class file so you can use the functions you created

// GET request for /api/notes
// call the getNotes() from the class you required
// res.json(note)

router.get("/notes", (req, res) => {
    fs.readFile(db, "utf8", (err, data) => {
        res.json(JSON.parse(data));
        console.log("Notes Returned");
    });
});

// POST request for /api/notes
// call the addNotes() from the class you required
// res.json(note)

router.post("/notes", (req, res) => {
    let newNote = req.body;
    // assigning id to the new note using .uuidv4() 
    newNote.id = uuidv4();

    fs.readFile(db, "utf8", (err, data) => {
        let note = JSON.parse(data);
        note.push(newNote);

        fs.writeFile(db, JSON.stringify(note), (err) => {
            if (err) {
                throw (err);

            }
            console.log("Note Recorded");
        });
    })
    res.json(newNote);
});

// DELETE request for /api/notes
// call the addNotes() from the class you required
// res.json(note)

router.delete("/notes/:id", (req, res) => {

    fs.readFile(db, "utf8", (err, data) => {
        let noteId = req.params.id;
        let noteData = JSON.parse(data);
        noteData = noteData.filter((note) => {
            if (noteId != note.id) {
                return true;
            } else {
                return false;
            };
        });
        // rewrite notes to db file
        fs.writeFile(db, JSON.stringify(noteData), function (err) {
            if (err)
                throw err;
            res.send(console.log("Note Deleted"));
        })
    });
});


// delete request for api/notes/:id
// call the deleteNote() function


module.exports = router;