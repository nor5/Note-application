import React from 'react';
import { Link } from 'react-router-dom';

let getTime = (note) => {
  return new Date(note.updated).toLocaleDateString()
}

let getContent = (note) => {
  let content = note.body.replaceAll('\n', ' ')
  if (content.length > 45) {
      return content.slice(0, 45) + '...'
  } else {
      return content
  }
}




const ListItem = ({note}) => {
 
  return (
    <Link to={`/notes/${note.id}`}>
      
    <div className='notes-list-item'>
      <h3>{note.title}</h3>
      <p><span>{getTime(note)}</span>{getContent(note)}</p>
    </div>
    </Link>
  );
}

export default ListItem;
