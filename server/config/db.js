import mongoose from 'mongoose';

export const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI || mongoURI.includes('<username>')) {
    console.log('----------------------------------------------------');
    console.log('⚠️ MONGODB ATLAS CLOUD URI NOT SET IN server/.env');
    console.log('👉 Please paste your MongoDB Atlas Connection String in server/.env:');
    console.log('   MONGODB_URI=mongodb+srv://<username>:<password>@aks-cluster.mongodb.net/aks_career_portal');
    console.log('----------------------------------------------------');
    return false;
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✅ MongoDB Atlas Cloud Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`❌ MongoDB Atlas Connection Error: ${error.message}`);
    return false;
  }
};
