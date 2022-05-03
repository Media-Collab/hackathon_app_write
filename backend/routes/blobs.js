const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.end('To get blobs')
})


router.post('/', (req, res) => {
    res.end('To save blobs')
})

module.exports = router;