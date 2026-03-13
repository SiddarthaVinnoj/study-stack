import express from "express";
import Note from "../models/noteModel.js";

const router = express.Router();

// CREATE NOTE
router.post("/notes", async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET NOTES BY LESSON
router.get("/notes/:lessonId", async (req, res) => {
  try {
    const notes = await Note.find({ lessonId: req.params.lessonId }).sort({ timestamp: 1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET NOTES BY USER (for "My Notes" column)
router.get("/notes/user/:userId", async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.params.userId }).sort({ timestamp: 1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE NOTE
router.delete("/notes/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
