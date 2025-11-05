import { useState } from 'react';

const pagos = [
  {
    id: 'PAY-001',
    cliente: 'Sarah González',
    pedido: 'ORD-001',
    monto: 450,
    metodo: 'Tarjeta',
    estado: 'Pagado',
    fecha: '13/10/2025',
  },
  {
    id: 'PAY-002',
    cliente: 'Carlos Ruiz',
    pedido: 'ORD-002',
    monto: 250,
    metodo: 'Efectivo',
    estado: 'Pendiente',
    fecha: '13/10/2025',
  },
  {
    id: 'PAY-003',
    cliente: 'Ana Martínez',
    pedido: 'ORD-003',
    monto: 350,
    metodo: 'Transferencia',
    estado: 'Pagado',
    fecha: '12/10/2025',
  },
  {
    id: 'PAY-004',
    cliente: 'Luis Pérez',
    pedido: 'ORD-004',
    monto: 150,
    metodo: 'Tarjeta',
    estado: 'Pagado',
    fecha: '11/10/2025',
  },
  {
    id: 'PAY-005',
    cliente: 'Sofía López',
    pedido: 'ORD-005',
    monto: 550,
    metodo: 'Efectivo',
    estado: 'Pendiente',
    fecha: '13/10/2025',
  },
];

export default function ContenidoPagos() {
  const [pagosData, setPagosData] = useState(pagos);

  const confirmarPago = (id: string) => {
    const actualizados = pagosData.map((p) =>
      p.id === id ? { ...p, estado: 'Pagado' } : p
    );
    setPagosData(actualizados);
  };

  const totalCobrado = pagosData
    .filter((p) => p.estado === 'Pagado')
    .reduce((sum, p) => sum + p.monto, 0);

  const pagosPendientes = pagosData.filter((p) => p.estado === 'Pendiente');
  const totalPendiente = pagosPendientes.reduce((sum, p) => sum + p.monto, 0);
  const totalGeneral = totalCobrado + totalPendiente;

  const resumenPorMetodo = ['Tarjeta', 'Efectivo', 'Transferencia'].map((metodo) => {
    const pagosMetodo = pagosData.filter((p) => p.metodo === metodo);
    const monto = pagosMetodo.reduce((sum, p) => sum + p.monto, 0);
    return {
      metodo,
      monto,
      transacciones: pagosMetodo.length,
    };
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Gestión de Pagos</h2>

      {/* Tarjetas resumen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded text-center">
          <h3 className="text-lg font-semibold text-green-700">Total Cobrado</h3>
          <p className="text-2xl font-bold text-green-800">${totalCobrado}</p>
          <p className="text-sm text-green-600">Este mes</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded text-center">
          <h3 className="text-lg font-semibold text-yellow-700">Pagos Pendientes</h3>
          <p className="text-2xl font-bold text-yellow-800">${totalPendiente}</p>
          <p className="text-sm text-yellow-600">{pagosPendientes.length} transacciones</p>
        </div>
        <div className="bg-blue-100 p-4 rounded text-center">
          <h3 className="text-lg font-semibold text-blue-700">Total General</h3>
          <p className="text-2xl font-bold text-blue-800">${totalGeneral}</p>
          <p className="text-sm text-blue-600">Pagado + Pendiente</p>
        </div>
      </div>

      {/* Tabla de pagos */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Historial de Pagos</h3>
        <p className="text-sm text-gray-500 mb-4">Gestiona y rastrea todos los pagos</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="p-2">ID Pago</th>
                <th className="p-2">Cliente</th>
                <th className="p-2">ID Pedido</th>
                <th className="p-2">Monto</th>
                <th className="p-2">Método</th>
                <th className="p-2">Estado</th>
                <th className="p-2">Fecha</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pagosData.map((pago) => (
                <tr key={pago.id} className="border-t">
                  <td className="p-2">{pago.id}</td>
                  <td className="p-2">{pago.cliente}</td>
                  <td className="p-2">{pago.pedido}</td>
                  <td className="p-2">${pago.monto}</td>
                  <td className="p-2">{pago.metodo}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        pago.estado === 'Pagado'
                          ? 'bg-green-200 text-green-800'
                          : 'bg-yellow-200 text-yellow-800'
                      }`}
                    >
                      {pago.estado}
                    </span>
                  </td>
                  <td className="p-2">{pago.fecha}</td>
                  <td className="p-2">
                    {pago.estado === 'Pendiente' ? (
                      <button
                        onClick={() => confirmarPago(pago.id)}
                        className="text-blue-500 hover:underline text-sm"
                      >
                        Confirmar
                      </button>
                    ) : (
                      <span className="text-gray-500 text-sm">Completado</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Resumen por método */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resumenPorMetodo.map((resumen) => (
          <div key={resumen.metodo} className="bg-gray-100 p-4 rounded text-center">
            <h4 className="text-md font-semibold text-gray-700">{resumen.metodo}</h4>
            <p className="text-xl font-bold text-gray-800">${resumen.monto}</p>
            <p className="text-sm text-gray-600">{resumen.transacciones} transacciones</p>
          </div>
        ))}
      </div>
    </div>
  );
}