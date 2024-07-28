import { Note } from "../Schema/NoteSchema.js";
import express from "express";

const router = express.Router();

router.post("", async (req, res) => {
  try {
    if (!req.body.title || !req.body.category || !req.body.description) {
      return res.status(400).send({ message: "Send all required field" });
    }

    const notes = await Note.find({});
    let currentID = notes.length;

    const newNote = {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      id: currentID++,
    };
    const note = await Note.create(newNote);
    return res.status(201).send(note);
  } catch (err) {
    console.log(err);
  }
});

router.get("", async (req, res) => {
  try {
    const notes = await Note.find({});
    return res.status(200).json({
      count: notes.length,
      data: notes,
    });
  } catch {
    (err) => {
      console.log(err);
    };
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    return res.status(200).json(note);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.category || !req.body.description) {
      return res.status(400).send({
        message: "Send all the required fields",
      });
    }
    const { id } = req.params;
    const result = await Note.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Data not found" });
    }
    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Note.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).send({ message: "Note deleted successfully" });
  } catch (err) {
    console.log(err);
  }
});

export default router;
