import React, { useEffect, useState } from 'react'
import NoteOverview from '../components/NoteOverview'
import axios from 'axios'

const Notes = () => {
  const [notes, setNotes] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try{
      const response = await axios.get("http://127.0.0.1:8000/api/notes/")
      setNotes(response.data)
      setIsLoading(false)
    } catch(error){
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete("http://127.0.0.1:8000/api/notes/")
      fetchData()
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
    console.log(notes)
  },[])

  return (
    <div className='grid max-h-full pt-5 pb-5 ' style={{gridTemplateColumns: '25% auto'}}>
      <div className='bg-green-200 h-full flex flex-col '>
        
        { isLoading ? <div>Is Loading</div> : (
          <> 
            {notes.map((noteItem, index) => (
              <NoteOverview key={index} noteItem={noteItem} handleDelete={handleDelete}/>
            ))}
          </>)
        }

      </div>
      <div className='bg-red-200 h-full'>
        column two 
      </div>
    </div>
  )
}

export default Notes