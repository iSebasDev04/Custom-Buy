import { useState } from 'react';

const orders = [
  {
    id: 'ORD-001',
    cliente: 'María González',
    producto: 'Playera personalizada',
    fecha: '13/10/2025',
    notas: 'Talla M y L color blanco',
    cantidad: '2 unidad(es)',
    estado: 'Pendiente',
  },
  {
    id: 'ORD-002',
    cliente: 'Carlos Ruiz',
    producto: 'Taza',
    fecha: '13/10/2025',
    notas: 'Diseño en ambos lados',
    cantidad: '1 unidad(es)',
    estado: 'En proceso',
  },
];

export default function contenidoPedidos() {
  const [orderStates, setOrderStates] = useState(
    orders.map((order) => order.estado)
  );

  const handleStateChange = (index: number, newState: string) => {
    const updatedStates = [...orderStates];
    updatedStates[index] = newState;
    setOrderStates(updatedStates);
  };

  const estadoOptions = ['Pendiente', 'En proceso', 'Listo', 'Entregado'];

  const getEstadoClass = (estado: string) => {
    switch (estado) {
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-700';
      case 'En proceso':
        return 'bg-orange-100 text-orange-700';
      case 'Listo':
      case 'Entregado':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Gestión de Pedidos</h2>
      <p className="text-sm text-gray-500 mb-6">Visualiza y actualiza el estado de todos los pedidos</p>

      <div className="space-y-4">
        {orders.map((order, index) => (
          <div key={order.id} className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-pink-600">{order.id}</h3>
              <span
                className={`text-sm px-2 py-1 rounded-full ${getEstadoClass(orderStates[index])}`}
              >
                {orderStates[index]}
              </span>
            </div>

            <ul className="text-sm text-gray-700 space-y-1 mb-3">
              <li>👤 Cliente: {order.cliente}</li>
              <li>📦 Producto: {order.producto}</li>
              <li>📅 Fecha: {order.fecha}</li>
              <li>📝 Notas: {order.notas}</li>
              <li>🔢 Cantidad: {order.cantidad}</li>
            </ul>

            {/* Selector de estado */}
            <label className="block text-sm font-medium text-gray-600 mb-1">Cambiar estado:</label>
            <select
              value={orderStates[index]}
              onChange={(e) => handleStateChange(index, e.target.value)}
              className="w-full border border-gray-300 rounded p-2 bg-white text-sm"
            >
              {estadoOptions.map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>

            <button className="mt-3 text-sm text-blue-500 hover:underline">Ver detalles</button>
          </div>
        ))}
      </div>
    </div>
  );
}