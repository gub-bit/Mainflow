import React, { useState } from 'react';

function Greeting(props) {
  const [name, setName] = useState(props.name || "Guest");

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Greeting;
