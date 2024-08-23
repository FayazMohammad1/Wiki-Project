const express = require('express');
const imageController = require('../controllers/imageController');

const router = express.Router();

// Route for uploading an image
router.post('/images/upload_image_temp', imageController.uploadImage);
router.get('/images/:imageid', imageController.serveImage);
router.post('/save-content', imageController.saveContent);



module.exports = router;
