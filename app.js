const notes = require('./notes')
const yargs = require('yargs')
const file = 'notes.json'
yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'adds a note',
  builder: {
      title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string'
      },
      body: {
          describe: 'Note body',
          demandOption: true,
          type: 'string'
      }
   },
   handler(argv) {
    notes.addNote(argv.title,argv.body,file)
   }
})
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
     },
     handler(argv) {
      notes.readNote(argv.title,file)
     }
  })
yargs.command({
    command: 'remove',
    description: 'removes a note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        }
        
    },
    handler(argv) {
        notes.removeNote(argv.title,file)
    }
})
yargs.command({
    command: 'get',
    describe: 'gets all notes',
     handler(argv) {
      notes.getNotes(file)
     }
  })


yargs.parse()