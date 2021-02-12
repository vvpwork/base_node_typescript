import app from "./src/app/app";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.SERVER_PORT || 8080;
app.listen(port, () => {
  console.log(`The api started on port: ${port}`);
});
