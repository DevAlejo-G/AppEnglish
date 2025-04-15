import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure";
import { preguntasIniciales } from "../wordsProfessions/l9";

const tituloLeccion = "Hostelería y Servicios: Professions";
const linkSiguiente = "/vocabulary/professions/leccion-9-p2";



function Leccion9Professions() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion9Professions;

