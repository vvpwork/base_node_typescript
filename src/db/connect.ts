import mongoose from "mongoose";
import env from "dotenv";
env.config();

export const connect = async () => {
  try {
    const port = process.env.DB_URL || "";
    await mongoose.connect(port, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
     console.log("Mongo connected on port:", port);
  } catch (error) {
    console.log(error);
  }
};
