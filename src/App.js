import React, { Component } from 'react';
import './App.css';

// Classコンポーネント
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input
//           type="text"
//           id="bar"
//           onChange={() => {
//             console.log('I am Changed!');
//           }}
//         />
//       </React.Fragment>
//     );
//   }
// }

// Functionコンポーネント
function App() {
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
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  );
  return dom;
}

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
