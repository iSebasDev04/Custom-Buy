import { useRef } from 'react';

export default function ImageDropzone() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log('Archivo subido:', file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log('Archivo seleccionado:', file);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={handleClick}
      className="w-full max-w-xl h-48 border-2 border-dashed border-pink-400 rounded-lg flex items-center justify-center cursor-pointer mb-6 bg-white"
    >
      <p className="text-pink-500">Haz clic o arrastra tu imagen aquí</p>
      <input
        type="file"
        accept=".png,.jpg,.jpeg"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}