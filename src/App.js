import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;
function App() {
  useEffect(() =>{
    tg.ready();
  }, [])
  const onClose = () => {
tg.close()
const ad = document.querySelector("#text");
const bt = "10"
const close = () => {
  ad.style.fontSize = ad.style.fontSize + 10;
}
  }
  return (
    <div className="App">
      work
      <button onClick={close}>Close</button>
      <h1 id="text" className='text'>Карпухин лох!</h1>
    </div>
  )
};

export default App;
