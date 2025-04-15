import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { FaVolumeUp, FaCheck, FaRedo } from "react-icons/fa";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Container,
  IconButton,
  Paper,
  CircularProgress,
} from "@mui/material";

import { usePreguntas } from "../setUpQuizzesP3/useQuestionsP3";
import { useRespuestas } from "../setUpQuizzesP3/useAnswersP3";
import { useResultados } from "../setUpQuizzesP3/useResultsP3";
import { speakWord } from "hooks/responsiveVoiceHelper";

const StyledCard = styled(Card)(({ theme }) => ({
  margin: "20px 0",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)"
  }
}));

const QuestionNumber = styled(Box)(({ theme }) => ({
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  backgroundColor: "#2196f3",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "16px",
  flexShrink: 0
}));

const AudioButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#e3f2fd",
  "&:hover": {
    backgroundColor: "#90caf9"
  }
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: "24px",
  padding: "12px 32px",
  fontSize: "1.1rem"
}));

export function EstructuraCuestionarioP3({
  tituloLeccion,
  linkSiguiente,
  preguntasIniciales,
}) {
  const { preguntas, setPreguntas, barajarArray } =
    usePreguntas(preguntasIniciales);
  const { respuestasUsuario, manejarCambioTexto, setRespuestasUsuario } =
    useRespuestas();
  const {
      resultados,
      puntajeTotal,
      manejarEnvio,
      manejarRepetirCuestionario,
      cuestionarioKey,
    } = useResultados(
      preguntas,
      setPreguntas,
      barajarArray,
      setRespuestasUsuario
    );

  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
  }, []);

  useEffect(() => {
    if (resultados) {
      const resultadosElement = document.getElementById("resultados");
      if (resultadosElement) {
        resultadosElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [resultados]);

  const handleSubmit = () => {
    const unansweredQuestion = Object.keys(respuestasUsuario).length !== preguntas.length;
    if (unansweredQuestion) {
      const firstUnanswered = preguntas.find((pregunta) => !respuestasUsuario[`pregunta${pregunta.id}`]);
      const element = document.getElementById(`pregunta-${firstUnanswered.id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      setSubmitted(true);
      manejarEnvio(respuestasUsuario);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    manejarRepetirCuestionario();
  };

  return (
    <Container maxWidth="md">
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            {tituloLeccion}
          </Typography>
          
          <div key={cuestionarioKey}>
            {preguntas.map((pregunta, index) => (
              <StyledCard key={pregunta.id} id={`pregunta-${pregunta.id}`}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <QuestionNumber>
                      {index + 1}
                    </QuestionNumber>
                    <Box>
                      <Typography variant="h5" component="div">
                        {pregunta.respuestasCorrectas}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: "1.2rem", fontStyle: "italic" }}>
                        {pregunta.fonetica}
                      </Typography>
                    </Box>
                    <AudioButton
                      onClick={() => speakWord(pregunta.palabra)}
                      aria-label="Play pronunciation"
                      size="large"
                      sx={{ ml: "auto" }}
                    >
                      <FaVolumeUp />
                    </AudioButton>
                  </Box>

                  <TextField
                    fullWidth
                    label="Tu Respuesta"
                    variant="outlined"
                    autoComplete="off"
                    value={respuestasUsuario[`pregunta${pregunta.id}`] || ""}
                    onChange={(e) => manejarCambioTexto(pregunta.id, e.target.value)}
                    disabled={submitted}
                    helperText={
                      submitted && resultados && (
                        resultados[index]?.correcto 
                        ? <span style={{ color: 'green', fontSize: '1rem' }}>Correcto</span>
                        : <span style={{ color: 'red', fontSize: '1rem' }}>●<span style={{ color: 'black' }}>{pregunta.palabra}</span></span>
                      )
                    }
                    sx={{ mt: 2, input: { fontSize: "1.2rem" } }}
                  />
                </CardContent>
              </StyledCard>
            ))}
          </div>

          {!submitted && (
            <SubmitButton
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              endIcon={<FaCheck />}
            >
              Enviar Respuestas
            </SubmitButton>
          )}

          {submitted && (
            <Paper elevation={3} sx={{ p: 3, mt: 3, textAlign: "center" }} id="resultados">
              <Typography variant="h5" gutterBottom>
                Puntaje total: {puntajeTotal} / {preguntas.length}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {(puntajeTotal / preguntas.length * 100).toFixed(2)}%
              </Typography>
              {puntajeTotal === preguntas.length && (
                <Typography variant="subtitle1" color="success.main" gutterBottom>
                  ¡Puntuación perfecta! ¡Felicidades!
                  <Button
                    variant="contained"
                    color="success"
                    component={Link}
                    to={linkSiguiente}
                    sx={{ ml: 2 }}
                  >
                    Siguiente
                  </Button>
                </Typography>
              )}
              <Button
                variant="outlined"
                color="primary"
                onClick={handleReset}
                startIcon={<FaRedo />}
                sx={{ mt: 2 }}
              >
                Repetir Cuestionario
              </Button>
            </Paper>
          )}
        </Box>
      )}
    </Container>
  );
}
