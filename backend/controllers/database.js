const sdk = require('node-appwrite');
const dbManager = {}

/*
Noje como se deberian colocar este tipo de configuraciones en express so...
    el que sepa que lo organice please :)
*/
const config = {
    'endpoint' : 'http://localhost/v1',
    'projectId' : '626ef5142338e5d47b34',
    'apiKey' : 'ab1c6597aaf0019246acea54764ec125e2263a0c9c1eb23f0e00b77fd28529bfb929adc1c547c261ed7c25ec6ecee8836623ac7dc86b960afecf2f66afd730776dd06495c350e35b42cd80a7538f841baa00f45c171a127cc77fca44db51d89e40ad060414e276b126df041c5d1aa632ad9c44c4d430c82c0cbfe8f9202d3a6a'
}

const client = new sdk.Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setKey(config.apiKey)
;

const database = new sdk.Database(client);

const checkIfExists = (name) => {
    database.listCollections().then(
    (res) => {
    for (let i in res.collections) {
        if (name === res.collections[i].name) {
            return true;
        }
    }
    return false;       
}, (err) => {
    console.log(err);
    return null;
    }
)}

const clearDb = (database) => {
    database.listCollections().then(
        (res) => {
            for (let i in res.collections) {
                console.log(res.collections[i].$id)
                database.deleteCollection(res.collections[i].$id).then(
                    (res) => {
                        console.log(res);
                    }, (err) => {
                        console.log(err);
                    }
                )
            }
        }, (err) => {
            console.log(err);
        }
    );
}

const initDb = (database) => {
    const collections = ['Blobs']
    for (let i in collections) {
        let name = collections[i];
        if (!checkIfExists(name)) {
            database.createCollection('unique()', name, 'document', ["role:all"], ["role:all"]).then(
            (res) => {
                console.log(res);
            }, (err) => {
                console.log(err);
            });
        } else {
            clearDb(database);
            initDb(database);
        }
    }
}

dbManager.insert = (collection, data) => {
    // TODO
}

dbManager.get = (collection, id) => {
    //TODO
}

dbManager.update = (collection, id, data) => {
    // TODO
}

dbManager.delete = (collection, id) => {
    // TODO
}



module.exports = dbManager;