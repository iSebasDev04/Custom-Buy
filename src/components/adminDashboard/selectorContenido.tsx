interface Props {
  active: 'Pedidos' | 'Citas' | 'Pagos';
  setActive: (tab: 'Pedidos' | 'Citas' | 'Pagos') => void;
}

export default function selectorContenido({ active, setActive }: Props) {
  const tabs: ('Pedidos' | 'Citas' | 'Pagos')[] = ['Pedidos', 'Citas', 'Pagos'];

  return (
    <div className="flex justify-center gap-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 rounded-full font-medium ${
            active === tab ? 'bg-pink-500 text-white' : 'bg-white text-pink-500 border border-pink-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}