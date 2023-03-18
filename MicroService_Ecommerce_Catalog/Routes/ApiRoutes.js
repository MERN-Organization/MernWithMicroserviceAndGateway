const express = require('express');
const app = express();

const FronSiteRoutes = require('../Routes/FrontSiteRoutes');
const AdminRoutes = require('../Routes/AdminRoutes');
// const RandomRoutes =  require("../Routes/RandomRoutes")
const UserRoutes = require('../Routes/UserRoutes')

app.use('/front', FronSiteRoutes);
app.use('/admin', AdminRoutes);

app.use('/user', UserRoutes)
// app.use('/random', RandomRoutes)

module.exports = app;
