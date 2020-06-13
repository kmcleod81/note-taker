const router = require('express').Router();

// install packages which may include 'path', 'express' {router from express}

// GET /notes html route
// sendFile() - directory, filename
router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'html', 'notes.html');
    res.sendFile(filePath);
});

// GET "*" (index html) route
// sendFile() - directory, filename
router.get('*', (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'html', 'index.html');
    res.sendFile(filePath);
});

//export the Router
module.exports = router;