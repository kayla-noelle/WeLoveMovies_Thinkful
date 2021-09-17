const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed")

router
   .route("/reviews/:reviewId")
module.exports= router;