import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Login, Registration, Homepage } from './routes'

class App extends React.Component {
  state = {
    left: false
  };
  toggleDrawer = () => { 

    this.setState({ left: false });
  };




  render() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}
export default App;