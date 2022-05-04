const express = require("express");

const blobsRouter = require("./blobs.router");
const loginRouter = require("./login.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/blobs", blobsRouter);
  router.use("/login", loginRouter);
}

module.exports = routerApi;
