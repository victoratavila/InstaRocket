const express = require('express');
const router = express.Router();
const connection = require('../database/connection');
const PostController = require('../controllers/PostController');


router.post('/posts', PostController.store);



module.exports = router;