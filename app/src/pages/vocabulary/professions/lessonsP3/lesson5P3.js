import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsProfessions/l5";

const tituloLeccion = "Ciencias P3: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-6";



function Leccion5ProfessionsP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion5ProfessionsP3;