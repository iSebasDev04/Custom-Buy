import { format, isBefore, startOfToday } from 'date-fns';

interface Props {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
}

export default function calendario({ selectedDate, setSelectedDate }: Props) {
  const today = startOfToday();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    if (!isBefore(date, today)) {
      setSelectedDate(date);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/2">
      <label className="block mb-2 font-medium text-gray-700">Selecciona una fecha</label>
      <input
        type="date"
        className="w-full border border-gray-300 rounded p-2"
        onChange={handleChange}
        min={format(today, 'yyyy-MM-dd')}
      />
      {selectedDate && (
        <p className="mt-2 text-sm text-gray-600">
          Fecha seleccionada: {format(selectedDate, 'dd/MM/yyyy')}
        </p>
      )}
    </div>
  );
}