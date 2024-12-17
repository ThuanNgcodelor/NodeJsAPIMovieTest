const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    time: { type: Date, required: true },
    actor: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Movie', MovieSchema);
