import './App.sass';
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/SideBar';


function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}

export default App;
