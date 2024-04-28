
// import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import helmet from "helmet";
import { mainRouter } from "./router";
import { createServer } from "./server";
 
export const app = createServer();

app.use(helmet());
app.use(bodyParser());

app.use(mainRouter);
