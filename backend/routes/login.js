const { Router } = require("express");
const router = Router();

const {
    getData
} = require('../controllers/login.controller');

router.route('/').get(getData);

// router.post('/register', async (req, res) => {
//     const user = req.body.user;
//     const email = req.body.email;
//     const password = req.body.password;

// })

module.exports = router;

