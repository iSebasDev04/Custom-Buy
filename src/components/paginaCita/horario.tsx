interface Props {
  selectedTime: string | null;
  setSelectedTime: (time: string) => void;
}

const availableTimes = [
  '10:00 AM', '11:00 AM', '12:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM',
];

export default function horario({ selectedTime, setSelectedTime }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <label className="block mb-2 font-medium text-gray-700">Selecciona una hora</label>
      <div className="grid grid-cols-2 gap-2">
        {availableTimes.map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`border rounded p-2 text-sm ${
              selectedTime === time
                ? 'bg-blue-500 text-white'
                : 'bg-white hover:bg-blue-100'
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}