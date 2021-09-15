const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
     .route("/")
router
     .route("/movies/:movieId")
router
     .route("/movies/:movieId")
router
     .route("/movies/theaters")
router
     .route("/movies/reviews")

module.exports = router;



// - `GET /movies/:movieId`
// - `GET /movies/:movieId` (incorrect ID)
// - `GET /movies/:movieId/theaters`
// - `GET /movies/:movieId/reviews`