const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./config/database');

//Test Db
db.authenticate()
  .then(() => console.log('Database connected..'))
  .catch(err => {
    console.log(err);
  });

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
