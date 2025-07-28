const express = require("express");
const { handlesGetAllUsers, getUserById, postRequest, patchRequest, deleteRequest } = require("../controllers/userControllers");

const router = express.Router();

router.get("/", handlesGetAllUsers);

//Dynamic path parameter API var :id
router.get("/:id", getUserById);

router.post("/", postRequest);

router.patch("/:id", patchRequest);

router.delete("/:id", deleteRequest);

module.exports = router;
