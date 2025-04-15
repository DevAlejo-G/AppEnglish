import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsTechnology/l3.js";

const tituloLeccion = "Equipos y Hardware (P2): Technology";
const linkSiguiente = "/vocabulary/technology/leccion-3-p2";



function Leccion3Technology() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3Technology;
