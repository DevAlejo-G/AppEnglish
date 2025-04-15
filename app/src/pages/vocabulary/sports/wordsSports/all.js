import { preguntasIniciales as preguntasL1 } from "./l1.js";
import { preguntasIniciales as preguntasL2 } from "./l2.js";
import { preguntasIniciales as preguntasL3 } from "./l3.js";
import { preguntasIniciales as preguntasL4 } from "./l4.js";

const barajarArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const lecciones = [
  preguntasL1.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
  preguntasL2.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
  preguntasL3.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
  preguntasL4.map(p => ({ palabra: p.palabra, respuestasCorrectas: p.respuestasCorrectas.join(", ") })),
];

lecciones.forEach(barajarArray);

export default lecciones;
