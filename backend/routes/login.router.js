const { Router } = require("express");
const router = Router();

const {
    getData,
    postData
} = require('../controllers/login.controller');

router.route('/').get(getData).post(postData);

// router.post('/register', async (req, res) => {
//     const user = req.body.user;
//     const email = req.body.email;
//     const password = req.body.password;

// })

module.exports = router;

