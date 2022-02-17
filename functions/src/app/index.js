const {Router} = require("express")
const router = Router();
const listsRouter = require("./lists/router");

router.use("/lists/genesis",listsRouter);

module.exports = router;