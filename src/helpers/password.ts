import jwt from "jsonwebtoken";
import generatorPassword from "generate-password";
import { config } from "../configs";

const pasword = "red";

type GeneratePassword = {
  success: boolean;
  password: string;
  hashPassword: string;
};

const passwordGen = async () => {
  try {
    const password = await generatorPassword.generate({
      length: 9,
      numbers: true,
      symbols: true,
    });
    return password;
  } catch (error) {
    console.log(error);
    return "";
  }
};

export const passwordAction = {
  generate: async (): Promise<GeneratePassword> => {
    try {
      const password = await passwordGen();
      if (!password) throw new Error("password error");
      const hashPassword = await jwt.sign(password, config.secret);
      return {
        success: true,
        password,
        hashPassword,
      };
    } catch (error) {
        console.error(error)
      return {
        success: false,
        password: "",
        hashPassword: "",
      };
    }
  },
  parse: async (pass: string): Promise<string | object> => {
    try {
      const password = await jwt.verify(pass, config.secret);
      return password;
    } catch (error) {
      console.error("Password parse wrong");
      return "";
    }
  },
};
