import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, index: true, unique: true },
    password: String,
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("user", userSchema);
