import dotenv from "dotenv";
dotenv.config();
export const config = {
  secret: process.env.SECRET_JWT || "test",
  port: process.env.SERVER_PORT,
  base_ur: process.env.BASE_URL,
  db_url: process.env.DB_URL,
};
