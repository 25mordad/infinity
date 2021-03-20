import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: { type: String },
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  likes: { type: [String], default: [] },
  createdAt: {
      type: Date,
      default: new Date(),
  },
});

export default mongoose.model("User", userSchema);
