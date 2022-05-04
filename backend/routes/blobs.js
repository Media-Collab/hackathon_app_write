const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.end('To get blobs')
})  
router.get('/main', (req, res) => {
    res.send('Probando route')
})  


router.post('/', (req, res) => {
    res.end('To save blobs')
})

module.exports = router;