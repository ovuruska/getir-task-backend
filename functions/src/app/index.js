const {Router} = require("express");
// eslint-disable-next-line new-cap
const router = Router();
const listsRouter = require("./lists/router");

router.use("/lists/genesis", listsRouter);

module.exports = router;
