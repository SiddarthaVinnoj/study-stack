import Course from "../models/courseSchema.js";

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createCourse = async (req, res) => {
  try {

    const newCourse = new Course(req.body);

    const savedCourse = await newCourse.save();

    res.status(201).json(savedCourse);

  } catch (err) {

    res.status(500).json({ message: err.message });

  }
};

export const updateCourse = async (req, res) => {
  try {

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedCourse);

  } catch (err) {

    res.status(500).json({ message: err.message });

  }
};

export const deleteCourse = async (req, res) => {
  try {

    await Course.findByIdAndDelete(req.params.id);

    res.json({ message: "Course deleted successfully" });

  } catch (err) {

    res.status(500).json({ message: err.message });

  }
};