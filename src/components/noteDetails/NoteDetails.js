import React from 'react'
import { MdDeleteForever } from "react-icons/md"; 
import './index.css'

function NoteDetails({ data, EditHandler, DeleteHandler }) { 
    const {id,title,description,url,date} = data
    return (
      
        <div className="note-container">
            
            <div className='note-card'>
                <h1 className='note-title'>{title}</h1>
                <p className='note-description'>{description}</p>
                <h4 className='note-url'>{url}</h4>
                <div className="note-footer">
                    <h5 className='note-date'>{date}</h5>
                    <div className="note-actions">
                        <button className='delete-icon' onClick={() => DeleteHandler(id)}>
                            <MdDeleteForever />
                        </button>
                        <button className='edit-button' onClick={() => EditHandler(id, title, description, url)} >Edit</button>
                    </div>


                </div>



            </div>
     
        </div>




         
  )
}

export default NoteDetails
