import React, { useState } from 'react'

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');

  const onSubmitSong = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  }

  return (
    <form onSubmit={onSubmitSong}>
      <label>Song name:</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
      <input type="submit" value="add song" />
    </form>
  );
}

export default NewSongForm;
