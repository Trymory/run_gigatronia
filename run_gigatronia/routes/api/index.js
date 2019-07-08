const router = require("express").Router();
const homeRoutes = require("./home");

// Home routes
router.use("/home", homeRoutes);

module.exports = router;
