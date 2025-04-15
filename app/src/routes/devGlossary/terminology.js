import NotFound from 'pages/home/notFound';
import { Routes, Route } from "react-router-dom";

import Leccion1Terminology from 'pages/devGlossary/devTerminology/lessons/lesson1';
import Leccion2Terminology from 'pages/devGlossary/devTerminology/lessons/lesson2';
import Leccion3Terminology from 'pages/devGlossary/devTerminology/lessons/lesson3';
import Leccion4Terminology from 'pages/devGlossary/devTerminology/lessons/lesson4';
import Leccion5Terminology from 'pages/devGlossary/devTerminology/lessons/lesson5';
import Leccion6Terminology from 'pages/devGlossary/devTerminology/lessons/lesson6';

import Leccion1TerminologyP2 from 'pages/devGlossary/devTerminology/lessonsP2/lesson1';
import Leccion2TerminologyP2 from 'pages/devGlossary/devTerminology/lessonsP2/lesson2';
import Leccion3TerminologyP2 from 'pages/devGlossary/devTerminology/lessonsP2/lesson3';
import Leccion4TerminologyP2 from 'pages/devGlossary/devTerminology/lessonsP2/lesson4';
import Leccion5TerminologyP2 from 'pages/devGlossary/devTerminology/lessonsP2/lesson5';
import Leccion6TerminologyP2 from 'pages/devGlossary/devTerminology/lessonsP2/lesson6';

const TerminologyRoutes = () => {
  return (
      <Routes>
        <Route path="leccion-1" element={<Leccion1Terminology />} />
        <Route path="leccion-2" element={<Leccion2Terminology />} />
        <Route path="leccion-3" element={<Leccion3Terminology />} />
        <Route path="leccion-4" element={<Leccion4Terminology />} />
        <Route path="leccion-5" element={<Leccion5Terminology />} />
        <Route path="leccion-6" element={<Leccion6Terminology />} />

        <Route path="leccion-1-p2" element={<Leccion1TerminologyP2 />} />
        <Route path="leccion-2-p2" element={<Leccion2TerminologyP2 />} />
        <Route path="leccion-3-p2" element={<Leccion3TerminologyP2 />} />
        <Route path="leccion-4-p2" element={<Leccion4TerminologyP2 />} />
        <Route path="leccion-5-p2" element={<Leccion5TerminologyP2 />} />
        <Route path="leccion-6-p2" element={<Leccion6TerminologyP2 />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default TerminologyRoutes;
