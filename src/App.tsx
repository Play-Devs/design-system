import Button from './components/Button/Button'; 

function App() {
    return (
        <div className="App">
            <header style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Play Devs Design System</h1>
                <p>Se você está vendo este texto, o App está funcionando!</p>
                <div style={{ margin: '20px' }}>
                    <Button 
                        variant="solid" 
                        onClick={() => alert('Botão clicado!')} 
                    >
                        Clique Aqui
                    </Button>
                </div>
            </header>
        </div>
    );
}

export default App;