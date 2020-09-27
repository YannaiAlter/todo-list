import express = require("express");
import bodyParser from "body-parser";
import "reflect-metadata";
import { createDBConnection } from "./connectionConfig";
import cors from "cors";

createDBConnection()
  .then((connection) => {
    const app: express.Application = express();
    app.use(cors());
    const { todos } = require("./src/routes/todos");
    app.use(bodyParser.json());

    //api/todos
    app.use("/api", todos);

    //api
    app.get("/api", function (req, res) {
      res.send("Hello World!");
    });
    app.listen(process.env.PORT || 3000, function () {
      console.log("App is listening on port 3000!");
    });
  })
  .catch((error) => console.log(error));
