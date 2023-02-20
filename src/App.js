import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
      
  }, []);
console.log(data)
  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
