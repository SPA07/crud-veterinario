import PacientsList from "./components/PacientsList";
import Form from "./components/Form";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? []);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const saveInLs = () => {
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
    };

    saveInLs();
  }, [pacientes]);

  const deletePacient = (id) => {
    const pacientsUpdated = pacientes.filter((pacient) => pacient.id !== id);
    setPacientes(pacientsUpdated);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <PacientsList
          pacientes={pacientes}
          setPaciente={setPaciente}
          deletePacient={deletePacient}
        />
      </div>
    </div>
  );
}

export default App;
