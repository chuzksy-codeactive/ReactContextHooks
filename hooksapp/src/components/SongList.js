import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darknes', id: 3 }
  ]);

  const [age, setAge] = useState(20);
 
  useEffect(() => {
    console.log('useEffect hook ran', songs);
  }, [songs]);

  useEffect(() => {
    console.log('useEffect hoot ran', age);
  }, [age]);

  const onAddSong = (title) => {
    setSongs([{ title, id: uuid() }, ...songs])
  }

  const addAge = () => {
    setAge(age + 1);
  }

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return (
            <li key={song.id}>{song.title}</li>
          )
        })}
      </ul>
      <NewSongForm addSong={onAddSong} />
      <button onClick={addAge}>Add to Age</button>
    </div>
  );
}

export default SongList;