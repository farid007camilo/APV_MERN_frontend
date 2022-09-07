import { useState, useEffect } from "react"
import Alerta from "./Alerta"
import usePacientes from "../hooks/usePacientes";

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [alerta, setAlerta] = useState({})
    const [id, setId] = useState(null)



    const {guardarPaciente, paciente} = usePacientes();
    
    useEffect(() => {

        if (paciente?.nombre) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            setId(paciente._id)
        
        }
        

    }, [paciente])

    const handleSubmit = e => {
        e.preventDefault()
    
            //validando el formulario
            if ([nombre, propietario, email, fecha, sintomas].includes('')) {
                
                setAlerta({
                    msg: 'Todos los campos son obligatorios',
                    error: true
                })
                return;
            }

            guardarPaciente({nombre, propietario, email, fecha, sintomas, id})
            setAlerta({msg:'Guardado Correctamente'})

            setNombre('')
            setPropietario('')
            setEmail('')
            setFecha('')
            setSintomas('')
            setId('')

            setTimeout(() => {
                setAlerta({})
            }, 3000);

      
    }


    const {msg} = alerta;

  return (
    <>
        <h2 className="font-black text-2xl text-center">Administrador de pacientes</h2>
        <p className="text-lg text-center mt-4 mb-10">
            Añade tus pacientes y {''} 
        <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

       

        <form 
            className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
            onSubmit={handleSubmit}
        >
            <div className="mb-5">
                <label htmlFor="nombre" className="text-gray-700 uppercase font-bold">Nombre Mascotas</label>
                <input 
                    id="nombre" 
                    type="text" 
                    placeholder="Nombre de la Mascota" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    />
            </div>

            <div className="mb-5">
                <label htmlFor="propietario" className="text-gray-700 uppercase font-bold">Nombre Propietario</label>
                <input 
                    id="propietario" 
                    type="text" 
                    placeholder="Nombre del Propietario" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange={e => setPropietario(e.target.value)}
                    />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="text-gray-700 uppercase font-bold">Email Propietario</label>
                <input 
                    id="email" 
                    type="email" 
                    placeholder="Email del Propietario" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
            </div>

            <div className="mb-5">
                <label htmlFor="fecha" className="text-gray-700 uppercase font-bold">Fecha Alta</label>
                <input 
                    id="fecha" 
                    type="date" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                    />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="text-gray-700 uppercase font-bold">Sintomas</label>
                <textarea 
                    id="sintomas" 
                    placeholder="Describa los Sintomas" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={sintomas}
                    onChange={e => setSintomas(e.target.value)}
                    />
            </div>
            
            <div className="flex justify-between my-5">

                <input 
                    type="submit" 
                    className='bg-indigo-600 w-full p-3 text-white rounded-xl uppercase font-bold mt-5 hover:cursor-pointer transition-colors hover:bg-indigo-800 md:w-auto'   
                    value={id ? 'Editar Paciente' : 'Agregar paciente'}
                />
                

            </div>

        </form>

        {msg && <Alerta alerta={alerta} />}
    </>
  )
}

export default Formulario