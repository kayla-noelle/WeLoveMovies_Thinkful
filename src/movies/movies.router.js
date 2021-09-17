const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
     .route("/")
     .get(controller.list)
     .all(methodNotAllowed);
router
     .route("/:movieId")
     .get(controller.read)
     .all(methodNotAllowed);
router
     .route("/moviesId/theaters")
     .get(controller.read)
     .all(methodNotAllowed);

router
     .route("/moviesId/reviews")
     .get(controller.listReviews)
     .all(metthodNotAllowed);

module.exports = router;



// - `GET /movies/:movieId`
// - `GET /movies/:movieId` (incorrect ID)
// - `GET /movies/:movieId/theaters`
// - `GET /movies/:movieId/reviews`