import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsProfessions/l7";

const tituloLeccion = "Seguridad y Emergencias P2: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-7-p3";



function Leccion7ProfessionsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion7ProfessionsP2;
