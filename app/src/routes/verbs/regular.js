import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Leccion1VR from 'pages/verbs/regular/lessons/lesson1';
import Leccion2VR from 'pages/verbs/regular/lessons/lesson2';
import Leccion3VR from 'pages/verbs/regular/lessons/lesson3';
import Leccion4VR from 'pages/verbs/regular/lessons/lesson4';
import Leccion5VR from 'pages/verbs/regular/lessons/lesson5';
import Leccion6VR from 'pages/verbs/regular/lessons/lesson6';
import Leccion7VR from 'pages/verbs/regular/lessons/lesson7';
import Leccion8VR from 'pages/verbs/regular/lessons/lesson8';
import Leccion9VR from 'pages/verbs/regular/lessons/lesson9';
import Leccion10VR from 'pages/verbs/regular/lessons/lesson10';
import Leccion11VR from 'pages/verbs/regular/lessons/lesson11';

import Leccion1P2VR from 'pages/verbs/regular/lessonsP2/lesson1P2';
import Leccion2P2VR from 'pages/verbs/regular/lessonsP2/lesson2P2';
import Leccion3P2VR from 'pages/verbs/regular/lessonsP2/lesson3P2';
import Leccion4P2VR from 'pages/verbs/regular/lessonsP2/lesson4P2';
import Leccion5P2VR from 'pages/verbs/regular/lessonsP2/lesson5P2';
import Leccion6P2VR from 'pages/verbs/regular/lessonsP2/lesson6P2';
import Leccion7P2VR from 'pages/verbs/regular/lessonsP2/lesson7P2';
import Leccion8P2VR from 'pages/verbs/regular/lessonsP2/lesson8P2';
import Leccion9P2VR from 'pages/verbs/regular/lessonsP2/lesson9P2';
import Leccion10P2VR from 'pages/verbs/regular/lessonsP2/lesson10P2';
import Leccion11P2VR from 'pages/verbs/regular/lessonsP2/lesson11P2';

import Leccion1P3VR from 'pages/verbs/regular/lessonsP3/lesson1P3';
import Leccion2P3VR from 'pages/verbs/regular/lessonsP3/lesson2P3';
import Leccion3P3VR from 'pages/verbs/regular/lessonsP3/lesson3P3';
import Leccion4P3VR from 'pages/verbs/regular/lessonsP3/lesson4P3';
import Leccion5P3VR from 'pages/verbs/regular/lessonsP3/lesson5P3';
import Leccion6P3VR from 'pages/verbs/regular/lessonsP3/lesson6P3';
import Leccion7P3VR from 'pages/verbs/regular/lessonsP3/lesson7P3';
import Leccion8P3VR from 'pages/verbs/regular/lessonsP3/lesson8P3';
import Leccion9P3VR from 'pages/verbs/regular/lessonsP3/lesson9P3';
import Leccion10P3VR from 'pages/verbs/regular/lessonsP3/lesson10P3';
import Leccion11P3VR from 'pages/verbs/regular/lessonsP3/lesson11P3';

import PracticeVerbRegular from 'pages/verbs/regular/practice';

import NotFound from 'pages/home/notFound';


const RegularRoutes = () => {
  return (
      <Routes>
        <Route path="leccion-1" element={<Leccion1VR />} />
        <Route path="leccion-2" element={<Leccion2VR />} />
        <Route path="leccion-3" element={<Leccion3VR />} />
        <Route path="leccion-4" element={<Leccion4VR />} />
        <Route path="leccion-5" element={<Leccion5VR />} />
        <Route path="leccion-6" element={<Leccion6VR />} />
        <Route path="leccion-7" element={<Leccion7VR />} />
        <Route path="leccion-8" element={<Leccion8VR />} />
        <Route path="leccion-9" element={<Leccion9VR />} />
        <Route path="leccion-10" element={<Leccion10VR />} />
        <Route path="leccion-11" element={<Leccion11VR />} />

        <Route path="leccion-1-p2" element={<Leccion1P2VR />} />
        <Route path="leccion-2-p2" element={<Leccion2P2VR />} />
        <Route path="leccion-3-p2" element={<Leccion3P2VR />} />
        <Route path="leccion-4-p2" element={<Leccion4P2VR />} />
        <Route path="leccion-5-p2" element={<Leccion5P2VR />} />
        <Route path="leccion-6-p2" element={<Leccion6P2VR />} />
        <Route path="leccion-7-p2" element={<Leccion7P2VR />} />
        <Route path="leccion-8-p2" element={<Leccion8P2VR />} />
        <Route path="leccion-9-p2" element={<Leccion9P2VR />} />
        <Route path="leccion-10-p2" element={<Leccion10P2VR />} />
        <Route path="leccion-11-p2" element={<Leccion11P2VR />} />

        <Route path="leccion-1-p3" element={<Leccion1P3VR />} />
        <Route path="leccion-2-p3" element={<Leccion2P3VR />} />
        <Route path="leccion-3-p3" element={<Leccion3P3VR />} />
        <Route path="leccion-4-p3" element={<Leccion4P3VR />} />
        <Route path="leccion-5-p3" element={<Leccion5P3VR />} />
        <Route path="leccion-6-p3" element={<Leccion6P3VR />} />
        <Route path="leccion-7-p3" element={<Leccion7P3VR />} />
        <Route path="leccion-8-p3" element={<Leccion8P3VR />} />
        <Route path="leccion-9-p3" element={<Leccion9P3VR />} />
        <Route path="leccion-10-p3" element={<Leccion10P3VR />} />
        <Route path="leccion-11-p3" element={<Leccion11P3VR />} />

        <Route path="leccion-practica" element={<PracticeVerbRegular />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default RegularRoutes;
