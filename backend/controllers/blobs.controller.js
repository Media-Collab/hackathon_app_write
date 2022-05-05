const blobsController = {};


blobsController.getAll = (req, res) => {
    res.end('get');
};

blobsController.getOne = (req, res) => {
    res.end(`get ${req.params.id}`);
}

blobsController.postBlob = (req, res) => {
    res.end('post');
};

blobsController.deleteBlob = (req, res) => {
    res.end(`delete ${req.params.id}`);
};

blobsController.updateBlob = (req, res) => {
    res.end('update');
};


module.exports = blobsController;