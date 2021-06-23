import './App.css';

function App() {
  const greeting = 'Hi!!!!';
  const dom = (
    <input
      type="text"
      onClick={() => {
        console.log('I am Clicked!');
      }}
    />
  );
  return dom;
}

export default App;
