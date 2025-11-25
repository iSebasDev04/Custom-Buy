import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubirImagen from './pages/subirImagen.tsx';
import PaginaCita from './pages/paginaCita';
import AdminDashboard from './pages/adminDashboard';
import Home from './pages/Home.tsx' 
import Login from './pages/Login.tsx' 
import Register from './pages/Register.tsx'


/*
import CitaPage from './pages/CitaPage'; // esta la crearás después
import IndexPage from './pages/IndexPage'; // ya la hizo tu compañero
*/
function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/subir" element={<SubirImagen />} />
        <Route path="/cita" element={<PaginaCita />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

