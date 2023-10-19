import './App.css';
//Router
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

//Componentes
import Navbar from './components/Navbar/Navbar.jsx';
//PAGINAS
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Nosotros' element={<Nosotros/>}/>
        <Route path='*' element={<h1>Not found pag 404</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
