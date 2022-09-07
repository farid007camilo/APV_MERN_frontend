import { useState } from "react"
import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta"
import useAuth from "../hooks/useAuth"

const CambiarPassword = () => {

  const {guardarPassword} = useAuth()
  const [alerta, setAlerta] = useState({})
  const [password, setPassword] = useState({
    pwd_actual:'',
    pwd_nueva:''
  })

  const handleSubmit = async e => {
    e.preventDefault();

      if (Object.values(password).some(campo => campo === "")) {
          setAlerta({
              msg: 'Todos los campos son obligatorios',
              error: true
          })
          
          setTimeout(() => {
              setAlerta({})
          }, 3000);

          return
      }

      if (password.pwd_nueva.length < 8) {
          setAlerta({
              msg: 'El password debe tener al menos 8 caracteres',
              error: true
          })
          
          setTimeout(() => {
              setAlerta({})
          }, 3000);

          return
      }

      const resultado = await guardarPassword(password)
      setAlerta(resultado);
      setTimeout(() => {
        setAlerta({})
    }, 3000);
  }

  const {msg} = alerta;

  return (
    <>
        <AdminNav />

        <h2 className="font-black text-2xl text-center mt-10">Cambiar Password</h2>
        <p className="text-lg text-center mt-4 mb-10">Modifica tu {''} <span className="text-indigo-600 font-bold">Password aqui</span></p>

        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

                {msg && <Alerta alerta={alerta}/> }

                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="pwd_actual" className="text-gray-700 uppercase font-bold">Password Actual</label>
                        <input 
                            id="pwd_actual" 
                            type="password" 
                            placeholder="Escribe tu password actual" 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                            name="pwd_actual"
                          /*   value={perfil.nombre || ''} */
                            onChange={e => setPassword({
                                ...password,
                                [e.target.name] : e.target.value
                            })} 
                            />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="pwd_nueva" className="text-gray-700 uppercase font-bold">Nuevo Password</label>
                        <input 
                            id="pwd_nueva" 
                            type="password" 
                            placeholder="Escribe tu nuevo password" 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                            name="pwd_nueva"
                           /*  value={perfil.nombre || ''} */
                           onChange={e => setPassword({
                            ...password,
                            [e.target.name] : e.target.value
                        })} 
                            />
                    </div>



                    <input 
                        type="submit" 
                        className='bg-indigo-600 w-full p-3 text-white rounded-xl uppercase font-bold mt-5 hover:cursor-pointer transition-colors hover:bg-indigo-800 md:w-auto'   
                        value='Actualizar Password'
                    />

                </form>
            </div>
        </div>

    </>
  )
}

export default CambiarPassword