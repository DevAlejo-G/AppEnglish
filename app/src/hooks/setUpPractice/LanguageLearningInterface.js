import React, { useState, useEffect, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import LanguageSelector from "./LanguageSelector";
import LessonNavigation from "./LessonNavigation";
import WordPractice from "./WordPractice";

const LanguageLearningInterface = ({ lecciones, tituloSeccion }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [currentLesson, setCurrentLesson] = useState(1);
  const [inputText, setInputText] = useState("");
  const [correctWords, setCorrectWords] = useState([]);
  const [incorrectWords, setIncorrectWords] = useState([]);
  const [currentWord, setCurrentWord] = useState({});
  const [shownWords, setShownWords] = useState([]);

  const totalLessons = lecciones.length;

  const currentWords = useMemo(() => {
    return lecciones[currentLesson - 1] || [];
  }, [lecciones, currentLesson]);

  const correctSound = useMemo(() => new Audio("/audio/correct.mp3"), []);
  const incorrectSound = useMemo(() => new Audio("/audio/incorrect.mp3"), []);

  const languages = [
    { id: 1, name: "English", code: "en" },
    { id: 2, name: "Spanish", code: "es" },
  ];

  useEffect(() => {
    const words = lecciones[currentLesson - 1] || [];
    if (words.length > 0 && shownWords.length === 0) {
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];
      setCurrentWord(randomWord);
      setShownWords([randomWord.palabra]);
    }
  }, [currentLesson, lecciones, shownWords.length]);

  const handlePlayback = () => {
    if (!Array.isArray(currentWords)) {
      console.error("currentWords no es un array:", currentWords);
      return;
    }

    const remainingWords = currentWords.filter(
      (word) => !shownWords.includes(word.palabra)
    );

    if (remainingWords.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingWords.length);
      const randomWord = remainingWords[randomIndex];
      setCurrentWord(randomWord);
      setShownWords((prev) => [...prev, randomWord.palabra]);
    }
  };

  // Valida la respuesta y avanza
  const handleCheck = () => {
    if (inputText.trim() === "") {
      alert("Por favor, ingresa una respuesta antes de comprobar.");
      return;
    }
    if (!currentWord || !currentWord.palabra) return;

    const englishWord = currentWord.palabra;
    const isCorrect =
      inputText.trim().toLowerCase() === englishWord.toLowerCase();

    if (isCorrect) {
      setCorrectWords((prev) => [...prev, englishWord]);
      correctSound.currentTime = 0;
      correctSound.play();
    } else {
      setIncorrectWords((prev) => [...prev, englishWord]);
      incorrectSound.currentTime = 0;
      incorrectSound.play();
    }
    setInputText("");

    if (shownWords.length === currentWords.length) {
      setTimeout(() => {
        if (currentLesson < totalLessons) {
          const nextLesson = currentLesson + 1;
          setCurrentLesson(nextLesson);
          setShownWords([]);
        }
      }, 1000);
    } else {
      handlePlayback();
    }
  };

  const navigateLesson = (direction) => {
    let newLesson = currentLesson;
    if (direction === "next" && currentLesson < totalLessons) {
      newLesson = currentLesson + 1;
    } else if (direction === "prev" && currentLesson > 1) {
      newLesson = currentLesson - 1;
    }
    if (newLesson !== currentLesson) {
      setCurrentLesson(newLesson);
      const words = lecciones[newLesson - 1] || [];
      if (words.length > 0) {
        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord = words[randomIndex];
        setCurrentWord(randomWord);
        setShownWords([randomWord.palabra]);
      } else {
        setCurrentWord({});
        setShownWords([]);
      }
    }
  };

  return (
    <Box sx={{ bgcolor: "background.default", p: 4 }}>
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Box textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Práctica
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {tituloSeccion}
          </Typography>
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            languages={languages}
          />
        </Box>

        <LessonNavigation
          currentLesson={currentLesson}
          navigateLesson={navigateLesson}
          totalLessons={totalLessons}
        />

        <WordPractice
          currentWords={currentWords}
          currentWord={currentWord}
          selectedLanguage={selectedLanguage}
          handleCheck={handleCheck}
          handlePlayback={handlePlayback}
          inputText={inputText}
          setInputText={setInputText}
          correctWords={correctWords}
          incorrectWords={incorrectWords}
        />
      </Box>
    </Box>
  );
};

export default LanguageLearningInterface;
