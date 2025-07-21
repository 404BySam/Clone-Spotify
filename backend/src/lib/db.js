import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Vous êtes bien connectée a MongoDB ${conn.connection.host}`);
  } catch (error) {
    console.log("Erreur de connection a MongoDB", error);
    process.exit(1);
  }
};
