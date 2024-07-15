import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;
function App() {
  useEffect(() =>{
    tg.ready();
  }, [])
  const onClose = () => {
tg.close()
  }
  return (
    <div className="App">
      work
      <button onClick={onClose}>Close</button>
      <h1 className='text'>Карпухин лох!</h1>
    </div>
  )
};

export default App;
