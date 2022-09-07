import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente";
const ListadoPacientes = () => {

  const {pacientes} = usePacientes();

  return (
    <>
        {pacientes.length ? 
        (<>
          <h2 className="font-black text-2xl text-center">Listado de Pacientes</h2>
          <p className="text-lg mt-4 mb-10 text-center">Administra tus {''} <span className="text-indigo-600 font-bold">pacientes y citas</span></p>

          {pacientes.map(paciente => (
              <Paciente
                key={paciente._id}
                paciente={paciente}
              />
          ))}

        </>) 
        
        : 

        (<>
          <h2 className="font-black text-2xl text-center">No Hay Pacientes...</h2>
          <p className="text-lg mt-4 mb-10 text-center">Comineza agregando {''}  <span className="text-indigo-600 font-bold">pacientes</span></p>
        </>)
        }
    </>
  )
}

export default ListadoPacientes