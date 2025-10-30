import Calendario from '../components/paginaCita/calendario';
import Horario from '../components/paginaCita/horario';
import MetodosPago from '../components/paginaCita/metodosPago';
import ResumenCita from '../components/paginaCita/resumenCita';
import { useState } from 'react';

export default function CitaPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-center mb-6 text-blue-600">Selecciona tu cita</h1>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        <Calendario selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <div className="flex flex-col gap-4 flex-1">
          <Horario selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
          <MetodosPago selected={paymentMethod} setSelected={setPaymentMethod} />
        </div>
      </div>
      <ResumenCita
        date={selectedDate}
        time={selectedTime}
        payment={paymentMethod}
      />
    </div>
  );
}