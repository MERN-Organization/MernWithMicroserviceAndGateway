const { default: axios } = require('axios');
const express = require('express');
const generateDynamicPath = require('../utils/generateDynamicPath');
const router = express.Router();
const registry = require('./registry.json');

router.all('/:apiName/*', async (req, res, next) => {
    const path = req.params[0].split('/');
    const dynamicPath = await generateDynamicPath(path);

    try {
        if (registry.services[req.params.apiName]) {
            axios({
                method: req.method,
                url: `${
                    registry.services[req.params.apiName].apiUrl
                }/${dynamicPath}`,
                headers: {...req.headers , isfromgateway: true },
                data: req.body
            })
                .then((responce) => {
                    res.send(responce.data);
                })
                .catch((err) => {
                    console.log(
                        'Error happend While making Request From Gateway',
                        err
                    );
                });
        } else {
            res.send(
                'No Microservice is Registered with the passed parameter name'
            );
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;
