import React, { useState, useEffect } from 'react';

function CanvasCard() {
  const [canvas, setCanvas] = useState("");

  useEffect(() => {
  fetch('https://canvas.instructure.com/api/v1/courses', {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: '13946~HgIECpPhd6zOjhdFna18iEXooHwv9Ae78QNkDPTmCWHcQiUgIXwArN0qkNVG2z4y',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then(response => response.json())
    .then(data => {
        setCanvas(data.value);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

  return (
    <div>
      <h2>Canvas Test</h2>
      <p>{canvas}</p>
    </div>
  );
}

export default CanvasCard;