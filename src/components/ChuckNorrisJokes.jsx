import React, { useState, useEffect } from 'react';

function ChuckNorrisJokes() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        setJoke(data.value);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Chuck Norris Jokes</h2>
      <p>{joke}</p>
    </div>
  );
}

export default ChuckNorrisJokes;