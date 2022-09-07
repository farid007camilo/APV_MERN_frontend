import usePacientes from "../hooks/usePacientes"

const Paciente = ({paciente}) => {

    const {setEdicion, eliminarPaciente} = usePacientes()
    
    const {email, fecha, nombre, propietario, sintomas, _id} = paciente

    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat('es', {dateStyle: 'long'}).format(nuevaFecha)
    }

    
  return (
    <>
        <div className="mx-5 my-6 bg-white shadow-md px-5 py-8 rounded-xl">

            <p className="font-bold uppercase text-indigo-700">Nombre Mascotas:{' '}<span className="font-normal normal-case text-black">{nombre}</span></p>

            <p className="font-bold uppercase text-indigo-700">Propietario:{' '}<span className="font-normal normal-case text-black">{propietario}</span></p>

            <p className="font-bold uppercase text-indigo-700">Email Contacto:{' '}<span className="font-normal normal-case text-black">{email}</span></p>

            <p className="font-bold uppercase text-indigo-700">Fecha de Alta:{' '}<span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span></p>

            <p className="font-bold uppercase text-indigo-700">Sintomas:{' '}<span className="font-normal normal-case text-black">{sintomas}</span></p>

            <div className="flex justify-between my-5">
                <button
                    type="button"
                    className="py-2 px-10 uppercase font-bold bg-amber-400 hover:bg-amber-500 text-white rounded-lg"
                    onClick={() => setEdicion(paciente)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 uppercase font-bold bg-red-500 hover:bg-red-600 text-white rounded-lg"
                    onClick={() => eliminarPaciente(_id)}
                >eliminar</button>
            </div>

        </div>
    </>
  )
}

export default Paciente