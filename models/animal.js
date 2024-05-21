const { default: mongoose } = require("mongoose");

const animalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    imageGallery: [{ type: String }],
    environmentId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'Environment' 
    },
    facts: [{ type: String }]
});

module.exports = mongoose.model('Animal', animalSchema);