const router = require("express").Router();
const userRoutes = require("./user");

// Home routes
router.use("/user", userRoutes);

module.exports = router;
