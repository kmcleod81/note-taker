const fs = require('fs');

// require uuidv4 pkg to generate an { id : uuidv4() (id, title, text) }
const { uuid } = require('uuidv4');

class Notebook {

    // getNotes()
    // inside of this function, you want to READ from the db.json file
    // the contents of the json file will be displayed on the page
    // to read the file - readFile() which is a part of the fs package

    // addNotes()
    // inside of this function, you want to write to the file using writeFile() from 'fs'

    // deleteNotes()
    // check against all the notes to see which one has the id you're looking to delete
    // call getNotes() and then filter the results to find teh id youre looking for and return the ones that don't match

}

module.exports = Notebook;