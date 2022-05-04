const express = require("express");
const app = express();

app.set("port", process.env.PORT || 4000);
const routerApi = require("./routes/index");

/* Middleware para aceptar json */
app.use(express.json());

app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}`);
  console.log(`http://localhost:${app.get("port")}/api/v1/`);
});

routerApi(app);
