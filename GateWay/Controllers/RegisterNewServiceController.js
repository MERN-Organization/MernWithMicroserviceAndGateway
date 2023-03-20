const express = require('express');
const router = express.Router();
const registry = require('../Routes/registry.json');
const fs = require('fs');

const registerNewService = async (req, res, next) => {
    console.log('asdasasdas', req.body);
    try {
        const { apiName } = req.body;

        registry.services[apiName] = { ...req.body };

        await fs.writeFileSync(
            './Routes/registry.json',
            JSON.stringify(registry),
            (err) => {
                if (err) {
                    res.send('Something Went Wrong While Writing File', err);
                }
            }
        );
        res.send('File Written Successfully');
    } catch (err) {
        next(err);
    }
};

module.exports = registerNewService;
