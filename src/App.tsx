import React from 'react';
import { Button } from './components/Button/Button'; 

function App() {
  return (
    <div className="App">
      <header style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Design System Demo</h1>
        <p>Se você está vendo este texto, o App está funcionando!</p>
        <div style={{ margin: '20px' }}>
          <Button 
            label="Clique Aqui" 
            variant="primary" 
            onClick={() => alert('Botão clicado!')} 
          />
        </div>
      </header>
    </div>
  );
}

export default App;