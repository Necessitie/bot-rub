import { useEffect } from 'react';
import './App.css';

function App() {

  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])


  return (
    <div className="App">
      <button onClick={onToggleButton}>togle</button>
    </div>
  )
};

export default App;
