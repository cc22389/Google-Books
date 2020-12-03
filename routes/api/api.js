const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/googlebooks", bookRoutes);

module.exports = router;
