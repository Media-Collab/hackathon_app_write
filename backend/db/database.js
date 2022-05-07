const sdk = require("node-appwrite");
const { config } = require("../config/config");
const dbManager = {};

/*
Noje como se deberian colocar este tipo de configuraciones en express so...
    el que sepa que lo organice please :)

    Solucionado uwu
*/

const client = new sdk.Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setKey(config.apiKey);

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
    },
    (err) => {
      console.log(err);
      return null;
    }
  );
};

const clearDb = (database) => {
  database.listCollections().then(
    (res) => {
      for (let i in res.collections) {
        console.log(res.collections[i].$id);
        database.deleteCollection(res.collections[i].$id).then(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    },
    (err) => {
      console.log(err);
    }
  );
};

const initDb = (database) => {
  const collections = ["Blobs"];
  for (let i in collections) {
    let name = collections[i];
    if (!checkIfExists(name)) {
      database
        .createCollection(
          "unique()",
          name,
          "document",
          ["role:all"],
          ["role:all"]
        )
        .then(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      clearDb(database);
      initDb(database);
    }
  }
};

export { initDb, clearDb, checkIfExists };
