const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.get('/', (req, res) => {
    return res.send(controller.list);
}).all(methodNotAllowed);

router.get('/:movieId', (req, res) => {
    return res.send(controller.read)
}).all(methodNotAllowed);

router.get('/:movieId/theaters', (req, res) => {
    return res.send(controller.listTheatersForMovie)
}).all(methodNotAllowed);

router.get('/:movieId/reviews', (req, res) => {
    return res.send(controller.listReviews)
}).all(methodNotAllowed);

// router  
//     .route("/:movieId/theaters")
//     .get(controller.listTheatersForMovie)
//     .all(methodNotAllowed);

// router
//     .route("/:movieId/reviews")
//     .get(controller.listReviews)
//     .all(methodNotAllowed);


module.exports = router;



