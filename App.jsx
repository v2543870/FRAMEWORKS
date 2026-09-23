import { useState } from 'react';
import './App.css';
 
function App() {
  const [count, setCount] = useState(0);
 
  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '50px' }}>
      <h1>Привіт, світ! Це React ⚛️</h1>
      <p>Виконав(ла): <strong>Кім Віолетта, група КН 3/2</strong></p>
      <button 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        onClick={() => setCount(count + 1)}
      >
        Кліків: {count}
      </button>
    </div>
  );
}
 
export default App;
