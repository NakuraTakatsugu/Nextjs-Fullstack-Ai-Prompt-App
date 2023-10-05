import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('Mongo db is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "project 0",
      useNewParser: true,
      useUnifiedTopology:true,
    })

    isConnected = true;
    console.log('mongoDB connected');
  } catch (error) {
    console.log(error);
  }
}
