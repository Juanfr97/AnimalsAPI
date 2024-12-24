const express = require('express');
const router = express.Router();
const Environment = require('../models/environment');

// GET all environments
router.get('/', async (req, res) => {
    Environment.find()
        .then(data => {
            res.json(data)
        })
        .catch(e => {
            res.json({message: e})
        });
});

// GET one environment
router.get('/:id', async (req, res) => {
    Environment.findById(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(e => {
            res.json({message: e})
        });
});

// POST create new environment
router.post('/', (req, res) => {
    const environment = new Environment({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description
    });
    environment.save()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.json({message: e})
        });
});

module.exports = router;