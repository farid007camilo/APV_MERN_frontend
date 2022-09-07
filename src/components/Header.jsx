import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {

    const {cerrarSesion} = useAuth()

  return (
    <>
        <header className="py-8 bg-indigo-500">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center">
                <h1 className="font-bold text-2xl text-indigo-200">Administardor de Pacientes de {''} 
                    <span className="text-white font-black">Veterinaria</span>
                </h1>

                <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
                    <Link to="/admin" className="text-white text-sm font-bold uppercase">Pacientes</Link>
                    <Link to="/admin/perfil" className="text-white text-sm font-bold uppercase">Perfil</Link>

                    <button type="button" 
                    className="text-white text-sm font-bold uppercase" 
                    onClick={cerrarSesion}
                    >
                        Cerrar sesion</button>
                </nav>

               
            </div>
         
        </header>
    </>
  )
}

export default Header