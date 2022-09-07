import { useState } from "react"
import { Link } from "react-router-dom"
import clienteAxios from "../../config/axios";
import Alerta from "../components/Alerta";

const Registrar = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [RepetirPassword, setRepetirPassword] = useState('');
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();

        // validaciones de campos vacios, passwords iguales, passwords cortas
        if ([nombre, email, password, RepetirPassword].includes('')) {
            
            setAlerta({msg: "hay campos vacios", error: true});
            return;
        }

        if (password !== RepetirPassword) {
            setAlerta({msg: "los passwords no son iguales", error: true});
            return;
        }

        if (password.length < 8 ) {
            setAlerta({msg: "el password es muy corto, debe tener al menos 8 caracteres", error: true});
            return;
        }

        setAlerta({});
        
        //creando el usuario en la api

        try {
            const url = `/veterinarios`;
            await clienteAxios.post(url, {nombre, email, password});
            setAlerta({msg: "La cuenta ha sido creada correctamente, revise su Email.", error: false})
        } catch (error) {
            setAlerta({msg: error.response.data.msg, error: true});
        }
        
    } 

    const {msg} = alerta

  return (
    <>
           <div>
                <h1 className='text-indigo-600 font-black text-6xl'>Crea tu Cuenta y Administra tus 
                <span className='text-black'> Pacientes</span></h1>
            </div>

            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">

               { msg && <Alerta  
                    alerta={alerta}
                 />
               }

                <form onSubmit={handleSubmit}>

                    <div className='my-5'>
                        <label className='uppercase text-gray-600 block text-xl font-bold'>
                            Nombre
                        </label>
                        <input 
                            type="text" 
                            placeholder='Tu Nombre' 
                            className='border w-full p-2 mt-3 bg-gray-50 rounded-xl'
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600 block text-xl font-bold'>
                            Email
                        </label>
                        <input 
                            type="email" 
                            placeholder='Email de registro' 
                            className='border w-full p-2 mt-3 bg-gray-50 rounded-xl'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600 block text-xl font-bold'>
                            Password
                        </label>
                        <input 
                            type="password" 
                            placeholder='Tu Password' 
                            className='border w-full p-2 mt-3 bg-gray-50 rounded-xl'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600 block text-xl font-bold'>
                            Repetir Password
                        </label>
                        <input 
                            type="password" 
                            placeholder='Repite tu Password' 
                            className='border w-full p-2 mt-3 bg-gray-50 rounded-xl'
                            value={RepetirPassword}
                            onChange={e => setRepetirPassword(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="Crear Cuenta" 
                    className='bg-indigo-700 w-full py-3 px-10 text-white rounded-xl uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto' />
                </form>
                <nav className="mt-8 lg:flex lg:justify-between"> 
                    <Link to="/" className="block text-center my-5 text-gray-500">¿Ya tienes una cuenta? Inicia Sesion</Link>
                    <Link to="/olvido-password" className="block text-center my-5 text-gray-500">Olvide mi Password</Link>
                </nav>

            </div>
    </>
  )
}

export default Registrar