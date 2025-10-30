interface Props {
  selected: string | null;
  setSelected: (method: string) => void;
}

const methods = ['Efectivo', 'Transferencia', 'Tarjeta'];

export default function metodosPago({ selected, setSelected }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <label className="block mb-2 font-medium text-gray-700">Método de pago</label>
      <div className="flex gap-4">
        {methods.map((method) => (
          <button
            key={method}
            onClick={() => setSelected(method)}
            className={`border rounded px-4 py-2 text-sm ${
              selected === method
                ? 'bg-pink-500 text-white'
                : 'bg-white hover:bg-pink-100'
            }`}
          >
            {method}
          </button>
        ))}
      </div>
    </div>
  );
}