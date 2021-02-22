import app from "./src/app/app";
import { connect } from "./src/db/connect";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.SERVER_PORT || 8080;

const start = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`The api started on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start()
