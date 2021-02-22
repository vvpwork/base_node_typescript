import { userModel } from "./schemas";

type data = {
  email: string;
  password: string;
};

export const userOperation = {
  save: async (data: data) => {
    try {
      const saveModel = new userModel(data);
      const isSaved = await saveModel.save();
      return isSaved;
    } catch (error) {
      console.log(error);
    }
  },
  find: async (email: string) => {
    try {
      const user = await userModel.findOne({ email });
      return user;
    } catch (error) {
      console.log(error);
    }
  },
  dropCollect: async () => {
    try {
      await userModel.collection.drop();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};
