import React, { useEffect, useState } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { Link } from 'react-router-dom';

const NotePage = ({ match }) => {
  let [note, setNote] = useState(null);
  let noteId = match.params.id;
  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    let response = await fetch(`http://localhost:5000/notes/${ noteId }`);
    let data = await response.json();

    setNote(data);
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft/>
          </Link>
        </h3>
      </div>
      <textarea value={ note?.body }></textarea>
    </div>
  );
};

export default NotePage;
