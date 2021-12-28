import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Login, Registration, Homepage } from './routes'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
