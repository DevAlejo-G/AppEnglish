import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsProfessions/l9";

const tituloLeccion = "Hostelería y Servicios P2: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-9-p3";



function Leccion9ProfessionsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion9ProfessionsP2;
