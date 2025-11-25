import { useNavigate } from 'react-router-dom';

export default function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-xl flex justify-between">
      <button
        onClick={() => navigate('/')}
        className="px-6 py-2 rounded-full text-md font-semibold text-[#E25D8E] bg-transparent transition-all duration-300 border border-[#E25D8E] hover:bg-[#E25D8E]/10 ml-4"
      >
        Cancelar
      </button>
      <button
        onClick={() => navigate('/cita')}
        className="px-6 py-2 rounded-full text-md font-semibold bg-[#27C7A9] text-white shadow-md transition-all duration-300 border border-[#27C7A9]"
      >
        Continuar y generar cita
      </button>
    </div>
  );
}