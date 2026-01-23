import { Link } from "react-router-dom"

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-extralight text-gray-900 dark:text-gray-100">
      <h1>404 - Not Found</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="mt-5 text-blue-500 hover:underline">Volver al inicio</Link>
      <img src="https://ahorradores.cooperativajuarez.net/assets/logo_07032025-Bzay-C_N.jpg" alt="Logo de Cooperativa Juárez SCL" className="w-32 h-32 object-cover mt-5 rounded-full border p-[0.5] bg-white" />
    </div>
  )
}
