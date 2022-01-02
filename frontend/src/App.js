import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Registration, Homepage } from './routes'
import SignInOutContainer from './routes/containers/index'
function App() {
  return (
    <Routes>
      <Route path="/signInOutContainer" element={<SignInOutContainer />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;