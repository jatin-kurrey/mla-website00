import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String },
    imageUrl: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.models.Work || mongoose.model("Work", WorkSchema);
