const Movie = require('../model/movie');

const list = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.render('index', { movies });
    } catch (err) {
        console.error("Error fetching movies:", err);
        res.status(500).send("Internal Server Error");
    }
};

const showAddForm = (req, res) => {
    res.render('add');
};

const add = async (req, res) => {
    const { name, actor, time, description } = req.body;
    const newMovie = new Movie({ name, time, actor, description });
    try {
        await newMovie.save();
        res.redirect('/');
    } catch (err) {
        console.error("Error saving movie:", err);
        res.status(500).send("Internal Server Error");
    }
};

const showEditForm = async (req, res) => {
    const movieId = req.params.id;
    try {
        const movie = await Movie.findById(movieId);
        if (!movie) {
            return res.status(404).send('Movie not found');
        }
        res.render('edit', { movie });
    } catch (err) {
        console.error("Error fetching movie:", err);
        res.status(500).send("Internal Server Error");
    }
};

const edit = async (req, res) => {
    const movieId = req.params.id;
    const { name, actor, time, description } = req.body;
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            movieId,
            { name, actor, time, description },
            { new: true }
        );
        if (!updatedMovie) {
            return res.status(404).send('Movie not found');
        }
        res.redirect('/');
    } catch (err) {
        console.error("Error updating movie:", err);
        res.status(500).send("Internal Server Error");
    }
};

const deleteMovie = async (req, res) => {
    const movieId = req.params.id;
    try {
        const deletedMovie = await Movie.findByIdAndDelete(movieId);
        if (!deletedMovie) {
            return res.status(404).send('Movie not found');
        }
        res.redirect('/');
    } catch (err) {
        console.error("Error deleting movie:", err);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = { list, showAddForm, add, showEditForm, edit, deleteMovie };
