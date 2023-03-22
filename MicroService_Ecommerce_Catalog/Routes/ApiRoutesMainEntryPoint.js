const express = require('express');
const app = express();

const FronSiteRoutes = require('./Front/FrontSiteRoutesMainEntryPoint');
const AdminRoutes = require('./Admin/AdminRoutesMainEntryPoint');
// const RandomRoutes =  require("../Routes/RandomRoutes")

app.use('/front', FronSiteRoutes);
app.use('/admin', AdminRoutes);

module.exports = app;
