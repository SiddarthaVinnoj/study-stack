import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  userId: String,
  courseId: String,
  lessonId: String,
  timestamp: Number,   // seconds from start of video
  text: String
});

export default mongoose.model("Note", noteSchema);
