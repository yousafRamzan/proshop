import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    await mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Database Connection Error ${error}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
