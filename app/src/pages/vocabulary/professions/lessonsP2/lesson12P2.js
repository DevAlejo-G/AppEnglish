import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsProfessions/l12";

const tituloLeccion = "Otros (P2) P2: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-12-p3";



function Leccion12ProfessionsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion12ProfessionsP2;
