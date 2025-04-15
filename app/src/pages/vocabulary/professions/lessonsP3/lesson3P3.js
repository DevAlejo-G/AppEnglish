import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsProfessions/l3";

const tituloLeccion = "Tecnología e Ingeniería P3: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-4";



function Leccion3ProfessionsP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3ProfessionsP3;