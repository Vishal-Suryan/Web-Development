const express = require("express");
const app = express();

const notes = ["Note1", "Note2"];

app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("<h1>This is Home Page of Notes API</h1>");
});

//get all notes
app.get("/notes", (req, res) => {
  if (notes.length !== 0) {
    res.json(notes);
  } else {
    // res.json({ message: "Notes are empty, add one." });
    res.json([]);
  }
});

//get a specific note
app.get("/notes/:id", (req, res) => {
  if (Number(req.params.id) >= 0 && Number(req.params.id) < notes.length) {
    res.json({
      data: notes[Number(req.params.id)],
      message: "Note Fetched successfully",
    });
  } else {
    res.status(404).json({
      message: "Note does not exist",
    });
  }
});

//add a note
app.post("/notes", (req, res) => {
  const note = req.body.note;
  if (!note) {
    return res.status(400).json({
      message: "Note is required",
    });
  }
  notes.push(note);
  res.status(201).json({
    data: note,
    message: "added successfully",
  });
});

//delete a note
app.delete("/notes/:id", (req, res) => {
  if (Number(req.params.id) >= 0 && Number(req.params.id) < notes.length) {
    notes.splice(Number(req.params.id), 1);
    res.status(200).json({
      message: "deleted successfully",
    });
  } else {
    res.status(404).json({
      message: `Note with id ${req.params.id} does not exist!`,
    });
  }
});

//update a note
app.put("/notes/:id", (req, res) => {
  if (!req.body.note) {
    return res.status(400).json({
      message: "Note missing!",
    });
  }
  if (Number(req.params.id) >= 0 && Number(req.params.id) < notes.length) {
    // const note = req.body.note || notes[Number(req.params.id)];
    notes.splice(Number(req.params.id), 1, req.body.note);
    res.status(200).json({
      message: "updated successfully",
    });
  } else {
    res.status(404).json({
      message: `Note with id ${req.params.id} does not exist!`,
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
