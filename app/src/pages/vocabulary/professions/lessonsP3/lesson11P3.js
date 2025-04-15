import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsProfessions/l11";

const tituloLeccion = "Otros (P1) P3: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-12";



function Leccion11ProfessionsP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion11ProfessionsP3;