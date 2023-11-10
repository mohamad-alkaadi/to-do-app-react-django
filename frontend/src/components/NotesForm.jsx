import axios from 'axios'
import React from 'react'

const NotesForm = ({fetchData, noteTitle, noteContent, setNoteTitle, setNoteContent, noteId, handleDelete}) => {
    
    const handleEdit = async (id, title, content) => {
        try {
            const response = await axios.patch(`http://127.0.0.1:8000/api/notes/${id}/`, {title: title, content:content})
            console.log(response);
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <input type="text" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} className="input bg-white input-bordered w-full max-w-xs" />
            <br/>
            <textarea onChange={(e) => setNoteContent(e.target.value)}  className="textarea bg-white textarea-accent" value={noteContent}></textarea>
            <br/>
            <button className="btn btn-primary ml-2" onClick={() => handleEdit(noteId, noteTitle, noteContent)}>Edit</button>
            <button className="btn btn-primary ml-2" onClick={() => handleDelete(noteId)}>Delete</button>
        </div>
    )
}

export default NotesForm