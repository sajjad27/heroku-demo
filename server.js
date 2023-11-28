const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'dist' directory
app.use(express.static('./dist'));

// Catch all other routes and return the 'index.html' file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

// Start the app on the process.env.PORT (Heroku sets this automatically)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
