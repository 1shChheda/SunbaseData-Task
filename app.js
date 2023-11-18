const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.set('views', 'views');

const authRoutes = require('./routes/auth');
app.use(authRoutes);

const homeRoutes = require('./routes/home');
app.use(homeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
});