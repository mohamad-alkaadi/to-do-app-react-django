import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const NoteOverview = ({noteItem, handleDelete}) => {
  return (
    <div className="border border-black">
        <div className='flex justify-between'>
          <div>Title:</div>
          <AiOutlineClose onClick={() => handleDelete()}/>
        </div>
        <div>Title</div>
        {/* if date created is not equal to updated show updated*/}
        <div>dateCreate:</div>
        <div>22/2/2023</div>
    </div>
  )
}

export default NoteOverview