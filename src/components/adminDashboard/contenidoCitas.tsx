import { useState } from 'react';

const appointments = [
  {
    id: 'ORD-001',
    cliente: 'María González',
    producto: 'Playera personalizada',
    fecha: '2025-11-05',
    hora: '10:00 - 11:00',
    telefono: '+52 123 456 7890',
    email: 'maria@email.com',
    estado: 'Programada',
  },
  {
    id: 'ORD-002',
    cliente: 'Carlos Ruiz',
    producto: 'Taza',
    fecha: '2025-11-05',
    hora: '14:00 - 15:00',
    telefono: '+52 987 654 3210',
    email: 'carlos@email.com',
    estado: 'Programada',
  },
];

export default function contenidoCitas() {
  const [selectedDate, setSelectedDate] = useState('2025-11-05');
  const [citas, setCitas] = useState(appointments);

  const handleEstadoChange = (id: string, nuevoEstado: string) => {
    const actualizadas = citas.map((cita) =>
      cita.id === id ? { ...cita, estado: nuevoEstado } : cita
    );
    setCitas(actualizadas);
  };

  const citasDelDia = citas.filter((cita) => cita.fecha === selectedDate);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Gestión de Citas</h2>

      {/* Calendario */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-600 mb-1">Selecciona una fecha:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border border-gray-300 rounded p-2"
        />
      </div>

      {/* Lista de citas */}
      {citasDelDia.length === 0 ? (
        <p className="text-sm text-gray-500">No hay citas para esta fecha.</p>
      ) : (
        <div className="space-y-4">
          {citasDelDia.map((cita) => (
            <div key={cita.id} className="border rounded-lg p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-pink-600">{cita.cliente}</h3>
                <span className="text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                  {cita.estado}
                </span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 mb-3">
                <li>🕒 Hora: {cita.hora}</li>
                <li>📞 Teléfono: {cita.telefono}</li>
                <li>📧 Email: {cita.email}</li>
                <li>📦 Producto: {cita.producto}</li>
                <li>🆔 Pedido: {cita.id}</li>
              </ul>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEstadoChange(cita.id, 'Completada')}
                  className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                >
                  Marcar completada
                </button>
                <button
                  onClick={() => handleEstadoChange(cita.id, 'Cancelada')}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                >
                  Cancelar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}