import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsProfessions/l1";

const tituloLeccion = "Salud y Medicina P3: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-2";



function Leccion1ProfessionsP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1ProfessionsP3;