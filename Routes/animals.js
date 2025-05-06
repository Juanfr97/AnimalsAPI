const express = require('express');
const router = express.Router();
const Animal = require('../models/animal');

// GET all animals
router.get('/', async (req, res) => {
    try {
        let query = {};
        if (req.query.environmentId) {
            query.environmentId = req.query.environmentId;
        }
        
        const animals = await Animal.find(query);
        const animalsWithId = animals.map(animal => {
            const obj = animal.toObject();
            obj.id = obj._id;
            delete obj._id;
            delete obj.__v;
            return obj;
        });
        res.json(animalsWithId);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET one animal
router.get('/:id', async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id);
        
        const obj = animal.toObject();
        obj.id = obj._id;
        delete obj._id;

        res.json(obj);
    }
    catch (err) {
        res.status(404).json({ message: 'Animal not found' });
    }
});

// POST create an animal
router.post('/', async (req, res) => {
    const animal = new Animal({
        _id: req.body._id,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        imageGallery: req.body.imageGallery,
        facts: req.body.facts,
        environmentId: req.body.environmentId
    });

    try {
        const newAnimal = await animal.save();
        res.status(201).json(newAnimal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT update an animal
// router.put('/:id', async (req, res) => {
//     try {
//         const updatedAnimal = await Animal.findByIdAndUpdate(
//             req.params.id,
//             {
//                 $set: req.body 
//             },
//             {
//                 new: true, 
//                 runValidators: true 
//             }
//         );
//         res.json(updatedAnimal);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // DELETE an animal
// router.delete('/:id', async (req, res) => {
//     try {
//         console.log(req.params.id);
//         await Animal.deleteOne({ _id: req.params.id });
//         res.json({ message: 'Animal deleted' });
//     } catch (err) {
//         res.status(404).json({ message: 'Animal not found' });
//     }
// });

module.exports = router;