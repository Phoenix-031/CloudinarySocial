const express = require("express");
const router = express.Router();
const {fileUploadHandler,getImageHandler} = require("../controllers/file.controller");

//Routes

router.post('/upload',fileUploadHandler)
router.get('/gallery',getImageHandler)

module.exports = router;
