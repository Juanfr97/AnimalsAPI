const { default: mongoose } = require("mongoose");

const environmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('Environment', environmentSchema);