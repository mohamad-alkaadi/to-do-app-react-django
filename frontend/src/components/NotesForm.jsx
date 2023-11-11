import axios from 'axios'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const NotesForm = ({handleClose, noteLastId, fetchData, noteTitle, noteContent, setNoteTitle, setNoteContent, noteId, handleDelete}) => {
    const [newNote, setNewNote] = useState({
        'title':'',
        'content':''
    })
    const handleEdit = async (id, title, content) => {
        try {
            const response = await axios.patch(`http://127.0.0.1:8000/api/notes/${id}/`, {title: title, content:content})
            console.log(response);
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }

    const handleCreate = async() => {
        try{
            setNewNote({'title':title, 'content': content})
            const response = await axios.post(`http://127.0.0.1:8000/api/notes/`, newNote)
            fetchData()
            handleClick(noteLastId, title, content)
            setNewNote({'title':'','content':''})
        } catch (error){
            console.log(error)
        }
    }

    return (
        <div className='flex justify-between'>
        <div>
            <input type="text" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} className="input bg-white input-bordered w-full max-w-xs" />
            <br/>
            <textarea onChange={(e) => setNoteContent(e.target.value)}  className="textarea bg-white textarea-accent" value={noteContent}></textarea>
            <br/>
            {noteId !== 0?
            <div>
            <button className="btn btn-primary ml-2" onClick={() => handleEdit(noteId, noteTitle, noteContent)}>Edit</button>
            <button className="btn btn-primary ml-2" onClick={() => handleDelete(noteId)}>Delete</button>
            </div>:
            <button className="btn btn-primary ml-2" onClick={() => handleCreate()}>Create</button>
            }

        </div>
        <div>
            <AiOutlineClose className="cursor-pointer" onClick={() => handleClose()}/>
        </div>
        </div>
    )
}

export default NotesForm