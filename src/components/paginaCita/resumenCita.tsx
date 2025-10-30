import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

interface Props {
  date: Date | null;
  time: string | null;
  payment: string | null;
}

export default function ResumenCita({ date, time, payment }: Props) {
  const navigate = useNavigate();

  return (
    <div className="mt-6 w-full max-w-5xl bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-gray-700">Resumen de tu cita</h2>
      <ul className="text-sm text-gray-600 mb-4">
        <li>📅 Fecha: {date ? format(date, 'dd/MM/yyyy') : 'No seleccionada'}</li>
        <li>🕒 Hora: {time || 'No seleccionada'}</li>
        <li>💳 Pago: {payment || 'No seleccionado'}</li>
      </ul>
      <div className="flex justify-between">
        <button
          onClick={() => navigate('/subir')}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Volver
        </button>
        <button
          onClick={() => navigate('/confirmacion')}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}