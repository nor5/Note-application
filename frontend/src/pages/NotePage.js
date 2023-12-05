import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

const NotePage = () => {
  // Use the useParams() hook to get the parameters
  const { id } = useParams();
  const navigate = useNavigate();

  let [update, setUpdate] = useState (false)

  let [note, setNote] = useState ([])

  useEffect( () => {
      getNote()

  }, [id])

  let getNote = async() => {
    if (id === 'new') return
    


     let  response = await fetch(`/api/notes/${id}/`)
     let data = await response.json()
     console.log('data', data)
     setNote(data)
  
  }
  let createNote = async () => {
    fetch(`/api/notes/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
  }
  let updateNote = async () => {
    fetch(`/api/notes/${id}/`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
}
let deleteNote = async () => {
  fetch(`/api/notes/${id}/`, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json'
      }
  })
  navigate('/')
}
  let handleSubmit = () => {
    

    if (id !== 'new' && !note.body){
      
      deleteNote()
    } else if (id !== 'new' && update == true){
      updateNote()
      

    }else if (id === 'new' && note.body !== undefined) {
      
      createNote()
    }else if (id === 'new' && note.body === undefined ) {
      
      navigate('/')
    }
    
    
    navigate('/')
  }

    
  let handleChange = (body, title) => {
    if(body) setNote(note=>({...note,'body':body}))
    if(title) setNote(note=>({...note,'title':title}))
    setUpdate(true)
   
  }
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          
          <ArrowLeft onClick={handleSubmit}/>
          
          </h3>
          { id !== 'new' ? (
            <button onClick={deleteNote}>Delete</button>
          ) : (
            <button onClick={handleSubmit}>Done</button>
          )
          }
          

      </div>
      <textarea className='note-title' onChange={(e) => { handleChange(null, e.target.value) }} value={note?.title} placeholder="Title"></textarea>
      <textarea className='note-body' onChange={(e) => { handleChange(e.target.value, null) }} value={note?.body}  placeholder="Note"></textarea>
      
    </div>
    
    
  );
}

export default NotePage;  