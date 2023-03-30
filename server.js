const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the dist directory
app.use(express.static(__dirname + '/dist/store'));

// Catch-all route to serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/store/index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
