import React, { useEffect } from 'react';
import { PlayCircle, CheckCircle } from "@mui/icons-material";
import { speakWord, speakWord2 } from "hooks/responsiveVoiceHelper";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  TextareaAutosize,
  Button,
  IconButton,
} from "@mui/material";


const WordPractice = ({
  currentWord,
  selectedLanguage,
  inputText,
  setInputText,
  handleCheck,
  correctWords,
  incorrectWords,
}) => {

  const getCurrentWordText = () => {
    if (!currentWord) return "";
    if (selectedLanguage === "es" && currentWord.respuestasCorrectas) {
      return Array.isArray(currentWord.respuestasCorrectas)
        ? currentWord.respuestasCorrectas.join(" ")
        : currentWord.respuestasCorrectas;
    }
    return currentWord.palabra || "";
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWord) {
        if (selectedLanguage === "es") {
          speakWord2(getCurrentWordText());
        } else {
          speakWord(getCurrentWordText());
        }
        console.log("Auto reproduciendo palabra:", currentWord);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [currentWord, selectedLanguage]);

  const handleReplay = () => {
    if (!currentWord) return;
    if (selectedLanguage === "es") {
      speakWord2(getCurrentWordText());
    } else {
      speakWord(getCurrentWordText());
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card sx={{ bgcolor: "#DFFCE3" }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold" color="#00B14F">
                Correct: {correctWords.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ bgcolor: "#FFDADA" }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold" color="#FF3C38">
                Incorrect: {incorrectWords.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ mt: 1 }}>
        <CardContent>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={handleReplay}>
              <PlayCircle fontSize="large" />
            </IconButton>
          </Box>
          {currentWord ? (
            <Typography
              variant="h5"
              color="primary"
              textAlign="center"
              mt={1}
              sx={{ wordWrap: "break-word" }}
            >
            </Typography>
          ) : (
            <Typography variant="h5" color="primary" textAlign="center" mt={1}>
              No hay palabras
            </Typography>
          )}
          <TextareaAutosize
            minRows={5}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe tu respuesta aquí..."
            style={{
              width: "90%",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              outline: "none",
              resize: "none",
              fontSize: "16px",
            }}
          />
          <Button
            onClick={handleCheck}
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<CheckCircle />}
            sx={{ mt: 2 }}
          >
            Check
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WordPractice;
