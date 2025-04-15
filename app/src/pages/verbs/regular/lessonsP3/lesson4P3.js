import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsRegular/l4.js";

const tituloLeccion = "Lección 4 P3: Verbo Regular";
const linkSiguiente = "/verb-regular/leccion-5";



function Leccion4P3VR() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion4P3VR;
