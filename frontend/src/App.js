import './App.css';
import { Route, Routes } from 'react-router-dom'
import { SignInOut, Registration, HomePage } from './routes'

function App() {
  return (
    <Routes>
      <Route path="/user/login" element={<SignInOut />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
