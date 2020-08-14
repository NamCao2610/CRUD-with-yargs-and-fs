const yargs = require("yargs");
const notes = require("./note");

yargs.version("1.1.0");

//Add a note
yargs.command({
  command: "add",
  description: "Add a note",
  builder: {
    title: {
      description: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      description: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Remove a note
yargs.command({
  command: "remove",
  description: "Remove a note",
  builder: {
    title: {
      description: "Remove note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//List notes
yargs.command({
  command: "list",
  description: "All list",
  handler() {
    notes.listNotes();
  },
});

//Read note
yargs.command({
  command: "read",
  description: "Read a note",
  handler(argv) {
    notes.readNote(argv.title);
  },
});

//Doc yargs

yargs.parse();
