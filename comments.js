// Create web server
// Load modules
const express = require('express');
const router = express.Router();
const { getComments } = require('../controllers/comment');

// Get comments
router.get('/comments', getComments);

// Export module
module.exports = router;