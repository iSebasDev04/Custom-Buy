// Home.tsx
import { Link } from "react-router-dom";
import React from 'react';
import AuthLayout from './AuthLayout'; 

const Home: React.FC = () => {
  return (
    // Usamos activeTab='none' para que no muestre las pestañas de Auth, solo el fondo y el botón "Volver"
    <AuthLayout 
      title="Custom Buy" 
      subtitle="Transforma tus diseños en productos únicos. Sublimación profesional con calidad garantizada."
      activeTab="none" // <-- CLAVE: No mostrar pestañas de Login/Register
    >
      <div className="flex flex-col items-center w-full max-w-5xl"> 
        
        {/* Pestañas de Navegación específicas de Home (Subir mi diseño / Buscar sesión) */}
        {/* Separamos estas pestañas del layout principal para controlar su estilo y visibilidad */}
        <div className="flex p-2 rounded-full mb-16 mt-4"> 
          <Link 
            to="/upload-design" // Botón Activo: Verde Menta
            className="px-6 py-2 rounded-full text-md font-semibold bg-[#27C7A9] text-white shadow-md transition-all duration-300 border border-[#27C7A9]"
          >
            + Subir mi diseño
          </Link>
          <Link 
            to="/find-session" // Botón Inactivo: Rosa pálido con borde rosa
            className="px-6 py-2 rounded-full text-md font-semibold text-[#E25D8E] bg-transparent transition-all duration-300 border border-[#E25D8E] hover:bg-[#E25D8E]/10 ml-4"
          >
            Buscar sesión
          </Link>
        </div>

        {/* Sección de Características - 3 Tarjetas */}
        <div className="grid md:grid-cols-3 gap-8 w-full mb-16">
          {/* Tarjeta 1: Subir tu diseño */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-[#E0F7FA] mb-4">
              <svg className="w-8 h-8 text-[#27C7A9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Sube tu diseño</h3>
            <p className="text-sm text-gray-600">Carga la imagen que puedes sublimar de forma básica y segura</p>
          </div>

          {/* Tarjeta 2: Elige tu horario */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-[#FFF5EF] mb-4">
              <svg className="w-8 h-8 text-[#E25D8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Elige tu horario</h3>
            <p className="text-sm text-gray-600">Agenda tu cita en el horario que mejor te convenga</p>
          </div>

          {/* Tarjeta 3: Paga fácilmente */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-[#E0F7FA] mb-4">
              <svg className="w-8 h-8 text-[#27C7A9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Paga fácilmente</h3>
            <p className="text-sm text-gray-600">Múltiples opciones de pago para tu comodidad</p>
          </div>
        </div>

        {/* Sección "Calidad profesional" */}
        {/* Replicación del banner oscuro con texto blanco */}
        <div 
          className="relative w-full h-64 bg-gray-900 rounded-2xl shadow-xl overflow-hidden mb-16"
          style={{ 
            backgroundImage: 'url("https://via.placeholder.com/1200x400?text=Placeholder+Image+for+Quality")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }} 
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-start p-10">
            <div className="text-white text-left max-w-md">
              <h3 className="text-3xl font-bold mb-2">Calidad profesional</h3>
              <p className="text-lg font-light">Sublimación de alta resolución en diversos productos</p>
            </div>
          </div>
        </div>

        {/* Sección inferior "¿Listo para comenzar?" (Gradiente Rosa a Azul) */}
        <div className="w-full bg-gradient-to-r from-[#E25D8E] to-[#27C7A9] p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-2">¿Listo para comenzar?</h3>
            <p className="text-lg font-light">Crea tu cuenta y empieza a sublimar tus ideas hoy mismo</p>
          </div>
          <div className="flex gap-4">
            <Link 
              to="/register" 
              className="px-6 py-3 bg-white text-[#E25D8E] font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
              Regístrate ahora
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#27C7A9] transition-colors duration-200"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Home;