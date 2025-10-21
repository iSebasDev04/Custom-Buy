// AuthLayout.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  activeTab: 'login' | 'register' | 'home' | 'none';
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle, activeTab }) => {
  const isLoginActive = activeTab === 'login';
  const isRegisterActive = activeTab === 'register';
  const showAuthTabs = isLoginActive || isRegisterActive;

  // ELIMINAMOS LAS CONSTANTES DE COLOR
  // const COLOR_PRIMARIO = '#E25D8E'; 
  // const COLOR_FONDO_CLARO = '#FFF5EF'; 
  // const COLOR_SECUNDARIO = '#27C7A9'; // Esta constante no se usaba en este archivo, pero la eliminamos para limpieza.

  return (
    // Reemplaza [COLOR_FONDO_CLARO] en el gradiente de fondo (opcional, pero ayuda)
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F0] to-[#E0F7FA] flex flex-col items-center p-4 relative">
      
      {/* Botón Volver (Mantener) */}
      <div className="absolute top-8 left-8">
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Volver
        </Link>
      </div>

      {/* Título y Subtítulo (Mantener) */}
      <div className={`text-center ${showAuthTabs ? 'mt-16 mb-10' : 'mt-20 mb-12'}`}>
        <h1 className="text-5xl font-extrabold text-[#D87093] mb-2 tracking-tight">
          {title}
        </h1>
        <p className="text-gray-500 text-lg">
          {subtitle}
        </p>
      </div>

      {/* Pestañas de Navegación de AUTH (Reemplazando variables por códigos directos) */}
      {showAuthTabs && (
        <div className="flex bg-white p-2 rounded-full shadow-lg mb-12 border border-gray-100">
          <Link 
            to="/login" 
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 
                        ${isLoginActive 
                          ? 'bg-[#E25D8E] text-white shadow-md' // CLAVE: Código de color directo
                          : 'text-gray-600 bg-[#FFF5EF]' // CLAVE: Código de color directo
                        }`}
          >
            Iniciar Sesión
          </Link>
          <Link 
            to="/register" 
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 
                        ${isRegisterActive 
                          ? 'bg-[#E25D8E] text-white shadow-md' // CLAVE: Código de color directo
                          : 'text-gray-600 bg-[#FFF5EF]' // CLAVE: Código de color directo
                        }`}
          >
            Registrarse
          </Link>
        </div>
      )}

      {/* Contenido específico de cada página */}
      {children}
    </div>
  );
}

export default AuthLayout;