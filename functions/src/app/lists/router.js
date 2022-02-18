const {Router} = require( "express" );
const controller = require("./controller");
const router = Router( );

/**
 *    @apiGroup Lists
 *    @api {get} / tasks

 *    @apiExample {response} Example response:
 *       {
 *         "success": {
 *            "id": "Tech stuff",
 *            "name": "Hello world",
 *            "finished": false
 *           }
 *      }
 */
router.get( "/tasks", controller.getTasks );

router.post("/tasks/create", controller.createTask);

router.post("/tasks/rename", controller.renameTask);

router.post("/tasks/toggle", controller.toggleTask);

router.post("/tasks/remove", controller.removeTask);

module.exports = router;
