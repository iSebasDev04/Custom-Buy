import { useState } from 'react';
import CardEstadistica from '../components/adminDashboard/cardsEstadisticas';
import SelectorCondetnido from '../components/adminDashboard/selectorContenido';
import ContenidoPedidos from '../components/adminDashboard/contenidoPedidos';
import ContenidoCitas from '../components/adminDashboard/contenidoCitas';
import ContenidoPagos from '../components/adminDashboard/contenidoPagos';


export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'Pedidos' | 'Citas' | 'Pagos'>('Pedidos');

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">Panel Administrativo</h1>

      {/* Estadisticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <CardEstadistica title="Pedidos Hoy" value="12" subtitle="+3 desde ayer" />
        <CardEstadistica title="Citas Pendientes" value="8" subtitle="Para esta semana" />
        <CardEstadistica title="Ingresos del Mes" value="$8,450" subtitle="+12% vs mes anterior" />
        <CardEstadistica title="Clientes Activos" value="45" subtitle="+5 nuevos" />
      </div>

      {/* Tabs */}
      <SelectorCondetnido  active={activeTab} setActive={setActiveTab} />

      {/* Panel dinámico */}
      <div className="mt-6">
        {activeTab === 'Pedidos' && <ContenidoPedidos />}
        {activeTab === 'Citas' && <ContenidoCitas />}
        {activeTab === 'Pagos' && <ContenidoPagos/>}

      </div>
    </div>
  );
}