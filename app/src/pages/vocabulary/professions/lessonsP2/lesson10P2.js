import React from "react";
import { EstructuraCuestionarioP2 } from "hooks/setUpQuizzesP2/questionnaireStructureP2.js";
import { preguntasIniciales } from "../wordsProfessions/l10";

const tituloLeccion = "Administración y Negocios P2: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-10-p3";



function Leccion10ProfessionsP2() {
  return (
    <EstructuraCuestionarioP2
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion10ProfessionsP2;
