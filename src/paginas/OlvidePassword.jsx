import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../../config/axios"


const OlvidePassword = () => {

    const [email, setEmail] = useState('');
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (email === '' || email.length < 6) {
            setAlerta({msg: 'El Email es obligatorio', error: true})
            return
        }


        try {
            
            const {data} = await clienteAxios.post('/veterinarios/olvido-password', {email})
            setAlerta({msg: data.msg})

        } catch (error) {
            
            setAlerta({
                msg: error.response.data.msg,
                error: true

            })
        }
    }

    const {msg} = alerta;

  return (
    <>
         <div>
                <h1 className='text-indigo-600 font-black text-6xl'>Restablezca su 
                <span className='text-black'> Password</span></h1>
         </div>

            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">

                {msg && <Alerta  alerta={alerta}/>}

                <form onSubmit={handleSubmit}>
                    <div className='my-5'>
                        <p className="text-gray-600 font-bold">Le enviaremos un correo electronico con mas instrucciones sobre como restablecer su contraseña.</p>
                        <input 
                            type="email" 
                            placeholder='Email de recuperacion de password' 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className='border w-full p-2 mt-3 bg-gray-50 rounded-xl'
                        />
                    </div>
                    <input type="submit" value="Enviar Correo" 
                    className='bg-indigo-700 w-full py-3 px-10 text-white rounded-xl uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto' />
                </form>

                <nav className="mt-8 lg:flex lg:justify-between"> 
                    <Link to="/registrar" className="block text-center my-5 text-gray-500">¿No tienes una cuenta? Registrate</Link>
                    <Link to="/" className="block text-center my-5 text-gray-500">¿Ya tienes una cuenta? Inicia Sesion</Link>
                </nav>

            </div>
    </>
  )
}

export default OlvidePassword