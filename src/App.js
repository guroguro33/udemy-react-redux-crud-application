import React from 'react';
import './App.css';

function App() {
  //   const greeting = 'Hi!!!!';
  const dom = (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input
        type="text"
        id="bar"
        onChange={() => {
          console.log('I am Clicked!');
        }}
      />
    </React.Fragment>
  );
  return dom;
}

export default App;
