const express = require('express');
const connectDB = require('./config/config');
const movieRoutes = require('./routes/movie.routes');
const path = require('path');
const app = express();
connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use('/', movieRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
