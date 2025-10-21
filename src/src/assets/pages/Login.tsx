import { Link } from "react-router-dom";
import React from 'react';
import AuthLayout from './AuthLayout'; // Asegúrate de que la ruta sea correcta

const Login: React.FC = () => {
  return (
    <AuthLayout title="Custom Buy" subtitle="Accede a tu cuenta">
      <div className="w-full max-w-sm">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full flex flex-col gap-6 text-center">
          <div className="text-left mb-2">
            <h3 className="text-xl font-semibold text-gray-700">Bienvenido de nuevo</h3>
            <p className="text-gray-500 text-sm">Ingresa tus credenciales para continuar</p>
          </div>
          
          <form 
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="text-left">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Correo electrónico</label>
              <input
                id="email"
                type="email"
                placeholder="tu@email.com"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#D87093] transition duration-150"
              />
            </div>
            
            <div className="text-left">
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Contraseña</label>
              <input
                id="password"
                type="password"
                placeholder="**********"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#D87093] transition duration-150"
              />
            </div>
            
            <button 
              type="submit"
              className="bg-[#27C7A9] text-white py-3 mt-4 rounded-lg font-semibold shadow-md hover:bg-[#1FA18A] transition duration-150 transform hover:scale-[1.01]"
            >
              Iniciar Sesión
            </button>
            
            <p className="text-xs text-gray-500 pt-2">
              Tip: Usa <span className="font-semibold text-[#D87093]">"admin@custombuy.com"</span> para ver el panel administrativo
            </p>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Login;