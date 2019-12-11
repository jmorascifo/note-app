const fs = require('fs')


const getNotes = file => loadNotes(file).forEach(note => console.log(note.title))

const addNote = (title, body, file) => {
  const notes = loadNotes(file)
  const duplicateNotes = notes.filter((note) => note.title === title)
  if(duplicateNotes.length === 0) {
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes,file)
    console.log('note added')
  } else {
      console.log('title taken')
  }
  
}

const readNote = (title,file) => {
    const notes = loadNotes(file)
    const notesToRead = notes.filter((note) => note.title === title)
    if (notesToRead.length === 1) {
        console.log(notesToRead[0].title)
        console.log("")
        console.log(notesToRead[0].body)
    }
}
const removeNote = (title, file) => {
    const notes = loadNotes(file)
    const remainingNotes = notes.filter((note) => note.title !== title)
      if(notes.length - remainingNotes.length === 1) {
        saveNotes(remainingNotes,file)
        console.log('note removed')
      } else if(notes.length - remainingNotes.length === 0){
          console.log('note wasn\'t found')
      }
}

const saveNotes = (notes,file) => fs.writeFileSync(file,JSON.stringify(notes) )

const loadNotes = file => {
    try {
        const dataBuffer = fs.readFileSync(file)
        return JSON.parse(dataBuffer.toString())
    } catch (e) {
        return []
    } 
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}