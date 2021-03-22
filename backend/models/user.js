import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: { type: String },
  name: { type: String, required: 'Please enter your name',  trim: true },
  email: { type: String, unique:true, required: 'Please enter your email',   trim: true, lowercase:true },
  password: { type: String, required: true },
  likes: { type: [String], default: [] },
  createdAt: {
      type: Date,
      default: new Date(),
  },
});

export default mongoose.model("User", userSchema);
