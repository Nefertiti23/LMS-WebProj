import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  let navigate = useNavigate();
  
  return (
    <>
      <h1>Welcome to My App</h1>
      <button onClick={() => navigate('/Login')}>Login</button>
    </>
  );
}

export default App;