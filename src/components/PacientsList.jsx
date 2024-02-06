/* eslint-disable react/prop-types */
import Pacient from "./Pacient";

function PacientsList({ pacientes, setPaciente, deletePacient }) {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mt-3">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
          <p className="text-xl mt-5 mb-4 text-center">
            Administra tus {""}
            <span className="text-indigo-500 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Pacient
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              deletePacient={deletePacient}
            />
          ))}
        </>) : (
        <>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
          <p className="text-xl mt-5 mb-4 text-center">
            Agrega un {""}
            <span className="text-indigo-500 font-bold">Paciente para comenzar</span>
          </p>
        </>
      )}
    </div>
  );
}

export default PacientsList;
