const fs = require("fs");
const chalk = require("chalk");

//Add a note

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.filter((note) => note.title === title);

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    writeNote(notes);
    console.log(chalk.green.inverse.bold("Add successful"));
  } else {
    console.log(chalk.red.inverse.bold("Note exists"));
  }
};

//Xoa 1 note
const removeNote = (title) => {
  const notes = loadNotes();

  const noteToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > noteToKeep.length) {
    writeNote(noteToKeep);
    console.log(chalk.green.inverse.bold("Remove success"));
  } else {
    console.log(chalk.red.inverse.bold("title doesn not exist"));
  }
};

//Lay 1 list note
const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.white.inverse.bold("Your notes"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

//Doc 1 note
const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.green.inverse.bold(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse.bold("Note does not exist"));
  }
};

//Doc notes
const loadNotes = () => {
  try {
    const noteBuffer = fs.readFileSync("notes.json");
    const noteString = noteBuffer.toString();
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

//Viet 1 note
const writeNote = (notes) => {
  const noteString = JSON.stringify(notes);
  fs.writeFileSync("notes.json", noteString);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
