import React, { useEffect, useState } from 'react'
import NoteOverview from '../components/NoteOverview'
import axios from 'axios'
import NotesForm from '../components/NotesForm'

const Notes = () => {
  const [notes, setNotes] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [noteTitle, setNoteTitle] = useState("")
  const [noteContent, setNoteContent] = useState("")
  const [noteId, setNoteId] = useState(0)
  const [noteLastId, setNoteLastId] = useState(0)

  const handleClose = () =>{
    setNoteTitle("");
    setNoteContent("");
    setNoteId(0);
  }
  const fetchData = async () => {
    try{
      const response = await axios.get("http://127.0.0.1:8000/api/notes/")
      setNotes(response.data)
      setIsLoading(false)
      const lastId = response.data.length
      setNoteLastId(lastId) //the number of id's is not equal to the last id because it does not decrease when we delete a note
    } catch(error){
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/notes/${id}`)
      fetchData()
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
    console.log(notes)
  },[])

  const handleClick = (id, title, content) => {
    setNoteId(id)
    setNoteTitle(title)
    setNoteContent(content)
    console.log(id)
    console.log(title)
    console.log(content)
  }

  return (
    <div className='grid max-h-full pt-5 pb-5 ' style={{gridTemplateColumns: '25% auto'}}>
      <div className='bg-green-200 h-full flex flex-col '>

        { isLoading ? <div>Is Loading</div> : (
          <>
            {notes.map((noteItem, index) => (
              <NoteOverview handleClose={handleClose} key={index} noteItem={noteItem} handleClick={handleClick}/>
            ))}
          </>)
        }

      </div>
      <div className='bg-red-200 h-full'>
        <NotesForm handleClose={handleClose} noteLastId={noteLastId} handleClick={handleClick} fetchData={fetchData} noteId={noteId} noteTitle={noteTitle} noteContent={noteContent} handleDelete={handleDelete} setNoteTitle={setNoteTitle} setNoteContent={setNoteContent}/>
      </div>
    </div>
  )
}

export default Notes
