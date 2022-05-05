const sdk = require('node-appwrite');
const db = require('./database')

const blobsController = {};


blobsController.getAll = (req, res) => {
    res.end('get');
};

blobsController.getOne = (req, res) => {
    res.end(`get ${req.params.blobId} from user ${req.params.userId}`);
}

blobsController.postBlob = (req, res) => {
    res.end('post');
};

blobsController.deleteBlob = (req, res) => {
    res.end(`delete ${req.params.blobId}`);
};

blobsController.updateBlob = (req, res) => {
    res.end(`update ${req.params.blobId}`);
};


module.exports = blobsController;