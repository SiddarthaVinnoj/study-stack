import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  lessonId: {
    type: Number
  },
  title: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: true
  }
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  lessons: [lessonSchema]
});

export default mongoose.model("Course", courseSchema);