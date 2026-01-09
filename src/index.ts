import "reflect-metadata";
import "dotenv/config";
import express from "express";
import path from "path";
import helmet from "helmet";
import logger from "morgan";
import favicon from "serve-favicon";
import { ERR } from "./middleware/midError";
import { playRt } from "./routes/PlayerRt";
import { dBase } from "./data/dBase";

(async () => {
    await dBase.initialize()
        .then(() => console.log("PostgreSQL is now Connected!"))
        .catch((error) => console.log(error));
    const app: express.Application = express();
    app.use(helmet());
    app.use(favicon(path.join(__dirname, "./public/", "favicon.ico")));

    // CORS Setup.
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods",
                "POST, GET, PUT, PATH, DELETE");
            res.status(200).json({ "status message": "OK" });
        };
        next();
    });

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(logger("dev"));
    app.use("/api/players", playRt);
    app.use(ERR.notFound);
    app.use(ERR.errHandler);

    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`🌐: http://localhost:${port}`);
        console.log("Press CTRL + C to exit.");
    });
})();



