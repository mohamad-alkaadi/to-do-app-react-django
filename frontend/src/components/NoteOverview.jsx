import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const NoteOverview = ({noteItem, handleDelete, handleClick}) => {
  return (
    <button onClick={() => handleClick(noteItem.id, noteItem.title, noteItem.content)} className="border border-black cursor-pointer">
        <div className='flex justify-between'>
          <div>Title:</div>
          <AiOutlineClose className="cursor-pointer" onClick={() => handleDelete(noteItem.id)}/>
        </div>
        <div className='text-left'>{noteItem.title}</div>
        {/* if date created is not equal to updated show updated*/}
        {noteItem.updated === noteItem.created ? (
        <div className='text-left'>Created: <br/>{new Date(noteItem.created).toLocaleString()}</div>
      ) : (
        <div className='text-left'>Updated: <br/>{new Date(noteItem.updated).toLocaleString()}</div>
      )}
    </button>
  )
}

export default NoteOverview