const express = require("express");

const blobsRouter = require("./blobs.controller");
const loginRouter = require("./login.controller");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/blobs", blobsRouter);
  router.use("/login", loginRouter);
}

module.exports = routerApi;
