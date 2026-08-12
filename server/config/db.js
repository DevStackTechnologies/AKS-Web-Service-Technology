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
      serverSelectionTimeoutMS: 3000,
    });
    console.log(`✅ MongoDB Atlas Cloud Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`⚠️ MongoDB Atlas failed (${error.message}). Trying local MongoDB fallback...`);
    try {
      const localConn = await mongoose.connect('mongodb://127.0.0.1:27017/aks_career_portal', {
        serverSelectionTimeoutMS: 3000,
      });
      console.log(`✅ Local MongoDB Connected: ${localConn.connection.host}`);
      return true;
    } catch (localErr) {
      console.warn(`⚠️ Local MongoDB not available either. Server running in memory / fallback mode.`);
      return false;
    }
  }
};
