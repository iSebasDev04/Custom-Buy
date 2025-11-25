import ImageDropzone from '../components/paginaFormulario/zonaDeImagen';
import ProductForm from '../components/paginaFormulario/formularioProducto';
import NavigationButtons from '../components/paginaFormulario/botonesFormulario';

export default function subirImagen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F0] to-[#E0F7FA] p-6 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-[#D87093] mb-2 tracking-tight">Sube tu diseño</h1>
      <ImageDropzone />
      <ProductForm />
      <NavigationButtons />
    </div>
  );
}