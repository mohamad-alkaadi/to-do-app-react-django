import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const NoteOverview = ({noteItem, handleClose, handleClick}) => {
  return (
    <div className="border border-black">
        <div className='flex justify-between'>
          <div  onClick={() => handleClick(noteItem.id, noteItem.title, noteItem.content)}>
          <div>Title:</div>
          <div className='text-left'>{noteItem.title}</div>
          {noteItem.updated === noteItem.created ? (
          <div className='text-left'>Created: <br/>{new Date(noteItem.created).toLocaleString()}</div>
        ) : (
          <div className='text-left'>Updated: <br/>{new Date(noteItem.updated).toLocaleString()}</div>
        )}

          </div>
          <AiOutlineClose className="cursor-pointer" onClick={() => handleClose()}/>
        </div>
        {/* if date created is not equal to updated show updated*/}
    </div>
  )
}

export default NoteOverview

