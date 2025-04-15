import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsProfessions/l2";

const tituloLeccion = "Educación P2: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-2-p3";



function Leccion2ProfessionsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2ProfessionsP2;
