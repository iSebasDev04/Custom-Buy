interface Props {
  title: string;
  value: string;
  subtitle: string;
}

export default function cardEstadistica({ title, value, subtitle }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <p className="text-2xl font-bold text-pink-500">{value}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}