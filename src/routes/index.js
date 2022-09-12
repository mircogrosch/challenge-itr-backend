const { Router } = require('express');
const clientsRoute = require("./clients")
const router = Router();

/**
 * Configure Routes
 */
 router.use("/clients",clientsRoute)

module.exports = router;