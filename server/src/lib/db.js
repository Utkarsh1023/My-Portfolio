import mongoose from "mongoose";

export async function connectDB() {
  if (!process.env.MONGODB_URI) {
    console.warn("MONGODB_URI is not set. Skipping MongoDB connection.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000 // fail fast instead of hanging for 30s
    });
    console.log("MongoDB connected");
  } catch (err) {
    // Do NOT crash the server. The contact/email feature does not depend on MongoDB,
    // so the API should stay up even if the database is unreachable.
    console.error("MongoDB connection failed (continuing without DB):", err.message);
  }
}
