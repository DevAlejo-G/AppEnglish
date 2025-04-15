import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsProfessions/l4";

const tituloLeccion = "Arte y Medios P3: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-5";



function Leccion4ProfessionsP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion4ProfessionsP3;