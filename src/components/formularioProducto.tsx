import { useState } from 'react';

export default function ProductForm() {
  const [product, setProduct] = useState('taza');
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  const productOptions = [
    { label: 'Stickers', value: 'stickers', disabled: true },
    { label: 'Tazas', value: 'taza', disabled: false },
    { label: 'Camisas', value: 'camisas', disabled: true },
  ];

  return (
    <form className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md mb-6">
      <label className="block mb-2 font-medium text-gray-700">Tipo de producto</label>
      <select
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 mb-4"
      >
        {productOptions.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>

      <label className="block mb-2 font-medium text-gray-700">Cantidad</label>
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-full border border-gray-300 rounded p-2 mb-4"
      />

      <label className="block mb-2 font-medium text-gray-700">Notas adicionales</label>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Especifica tamaño, color, detalles especiales..."
        className="w-full border border-gray-300 rounded p-2"
      />
    </form>
  );
}