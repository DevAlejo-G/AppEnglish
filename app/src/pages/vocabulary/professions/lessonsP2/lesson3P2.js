import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsProfessions/l3";

const tituloLeccion = "Tecnología e Ingeniería P2: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-3-p3";



function Leccion3ProfessionsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3ProfessionsP2;
