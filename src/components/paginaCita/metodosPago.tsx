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
            className={`border rounded px-6 py-2 text-md font-semibold text-[#E25D8E] ${
              selected === method
                ? 'bg-pink-500 text-white'
                : 'bg-transparent border border-[#E25D8E] hover:bg-[#E25D8E]/10'
            }`}
          >
            {method}
          </button>
        ))}
      </div>
    </div>
  );
}