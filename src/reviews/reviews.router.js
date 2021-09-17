const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed")

router
   .route("/:reviewId")
   .put(controller.update)
   .delete(controller.delete)
   .all(methodNotAllowed);
module.exports= router;