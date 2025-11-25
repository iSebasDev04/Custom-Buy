
import React from 'react';
import AuthLayout from './AuthLayout'; // Asegúrate de que la ruta sea correcta

const Register: React.FC = () => {
  return (
    <AuthLayout title="Custom Buy" subtitle="Accede a tu cuenta"> {/* El subtítulo se ajusta para que las pestañas aparezcan */}
      <div className="w-full max-w-sm">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full flex flex-col gap-6 text-center">
          <div className="text-left mb-2">
            <h3 className="text-xl font-semibold text-gray-700">Crear cuenta nueva</h3>
            <p className="text-gray-500 text-sm">Completa el formulario para registrarte</p>
          </div>
          
          <form 
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="text-left">
              <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-1">Nombre completo</label>
              <input
                id="fullName"
                type="text"
                placeholder="Juan Pérez"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#D87093] transition duration-150"
              />
            </div>
            
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
              <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Teléfono</label>
              <input
                id="phone"
                type="tel"
                placeholder="+52 123 456 7890"
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
              className="bg-[#E25D8E] text-white py-3 mt-4 rounded-lg font-semibold shadow-md hover:bg-[#C24A78] transition duration-150 transform hover:scale-[1.01]"
            >
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Register;