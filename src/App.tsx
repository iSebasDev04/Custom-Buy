import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubirImagen from './pages/subirImagen';
import PaginaCita from './pages/paginaCita';
import AdminDashboard from './pages/adminDashboard';

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

      </Routes>
    </Router>
  );
}

export default App;

