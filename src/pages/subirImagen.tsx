import ImageDropzone from '../components/zonaDeImagen';
import ProductForm from '../components/formularioProducto';
import NavigationButtons from '../components/botonesFormulario';

export default function subirImagen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-center mb-6 text-pink-600">Sube tu diseño</h1>
      <ImageDropzone />
      <ProductForm />
      <NavigationButtons />
    </div>
  );
}