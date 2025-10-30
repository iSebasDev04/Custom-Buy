import { useNavigate } from 'react-router-dom';

export default function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-xl flex justify-between">
      <button
        onClick={() => navigate('/')}
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
      >
        Cancelar
      </button>
      <button
        onClick={() => navigate('/cita')}
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
      >
        Continuar a siguiente cita
      </button>
    </div>
  );
}