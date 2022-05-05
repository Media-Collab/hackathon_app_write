const { Router } = require("express");
const router = Router();

const {
    getAll, 
    getOne,
    postBlob,
    updateBlob,
    deleteBlob,
} = require('../controllers/blobs.controller');

router.route('/').get(getAll).post(postBlob)
router.route('/user/:userId/blob/:blobId').get(getOne).put(updateBlob).delete(deleteBlob)

module.exports = router;
