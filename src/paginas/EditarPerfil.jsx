import { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav"
import useAuth from "../hooks/useAuth"
import Alerta from "../components/Alerta";
const EditarPerfil = () => {

    const {auth, actualizarperfil} = useAuth();
    const [perfil, setPerfil] = useState({});
    const [alerta, setAlerta] = useState({})

    useEffect( () => {
        setPerfil(auth)
    }, [auth])


    const handleSubmit = async e => {
        e.preventDefault();

        const {nombre, email} = perfil;

        if ([nombre, email].includes('')) {

            setAlerta({
                msg: 'Nombre y Email son obligatorios',
                error: true
            })
            
            setTimeout(() => {
                setAlerta({})
            }, 3000);

            return
        }

        const resultado = await actualizarperfil(perfil)
        setAlerta(resultado);
        setTimeout(() => {
            setAlerta({})
        }, 3000);

    }

    const {msg} = alerta;

  return (
    <>
        <AdminNav />

        <h2 className="font-black text-2xl text-center mt-10">Editar Perfil</h2>
        <p className="text-lg text-center mt-4 mb-10">Modifica tu {''} <span className="text-indigo-600 font-bold">Informacion aqui</span></p>

        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

                {msg && <Alerta alerta={alerta}/> }

                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="nombre" className="text-gray-700 uppercase font-bold">Nombre</label>
                        <input 
                            id="nombre" 
                            type="text" 
                            placeholder="Nombre" 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                            name="nombre"
                            value={perfil.nombre || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                            />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="web" className="text-gray-700 uppercase font-bold">Sitio Web</label>
                        <input 
                            id="web" 
                            type="text" 
                            placeholder="Sitio Web" 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                            name="web"
                            value={perfil.web || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                            />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="telefono" className="text-gray-700 uppercase font-bold">Telefono</label>
                        <input 
                            id="telefono" 
                            type="text" 
                            placeholder="Telefono" 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                            name="telefono"
                            value={perfil.telefono || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                            />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="text-gray-700 uppercase font-bold">Email</label>
                        <input 
                            id="email" 
                            type="text" 
                            placeholder="Email" 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                            name="email"
                            value={perfil.email || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                            />
                    </div>

                    <input 
                        type="submit" 
                        className='bg-indigo-600 w-full p-3 text-white rounded-xl uppercase font-bold mt-5 hover:cursor-pointer transition-colors hover:bg-indigo-800 md:w-auto'   
                        value='Guardar Cambios'
                    />

                </form>
            </div>
        </div>
    </>
  )
}

export default EditarPerfil