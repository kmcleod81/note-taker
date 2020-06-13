const fs = require('fs');

// require uuidv4 pkg to generate an { id : uuidv4() (id, title, text) }
const { uuid } = require('uuidv4');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notebook {

    getNotes() {
        return readFileAsync("db/db.json").then((notes) => {
            let parseNotes = []
            try {
                parseNotes = [].concat(JSON.parse(notes));
            } catch (error) {
                parseNotes = [];
            }
            return parseNotes;
        })
    }
    // inside of this function, you want to READ from the db.json file
    // the contents of the json file will be displayed on the page
    // to read the file - readFile() which is a part of the fs package

    addNotes(note) {
        const { title, text } = note;
        const newNote = { title, text, id: uuidv1() };
        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => writeFileAsync("db/db.json", JSON.stringify(updatedNotes)))
            .then(() => newNote);
    }
    // inside of this function, you want to write to the file using writeFile() from 'fs'

    deleteNotes(id) {
        return true;
    }
    // check against all the notes to see which one has the id you're looking to delete
    // call getNotes() and then filter the results to find teh id youre looking for and return the ones that don't match

}

module.exports = new Notebook();