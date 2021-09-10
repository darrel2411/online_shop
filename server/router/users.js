const router = require("express").Router();
const Controller = require("../controllers/userController");

router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.get("/", Controller.allUsers);

module.exports = router;
