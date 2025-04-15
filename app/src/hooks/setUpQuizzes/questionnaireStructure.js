import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { FaVolumeUp } from "react-icons/fa";
import SendIcon from "@mui/icons-material/Send";
import { FaRedo } from "react-icons/fa";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Container,
  IconButton,
  Paper,
  CircularProgress,
} from "@mui/material";

import { usePreguntas } from "./useQuestions";
import { useRespuestas } from "./useAnswers";
import { useResultados } from "./useResults";
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

export function EstructuraCuestionario({
  tituloLeccion,
  linkSiguiente,
  preguntasIniciales,
}) {
  const { preguntas, setPreguntas, barajarArray } =
    usePreguntas(preguntasIniciales);
  const { respuestasUsuario, manejarCambioRadio, setRespuestasUsuario } =
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
      document.getElementById("resultados").scrollIntoView({ behavior: 'smooth' });
    }
  }, [resultados]);

  const handleSubmit = () => {
    const unansweredQuestion = Object.keys(respuestasUsuario).length !== preguntas.length;
    if (unansweredQuestion) {
      const firstUnanswered = preguntas.find((pregunta) => !respuestasUsuario[`pregunta${pregunta.id}`]);
      const element = document.getElementById(`pregunta-${firstUnanswered.id}`);
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      setSubmitted(true);
      manejarEnvio(respuestasUsuario);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    manejarRepetirCuestionario();
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md">
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
                      {pregunta.palabra}
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
                <RadioGroup
                  value={respuestasUsuario[`pregunta${pregunta.id}`] || ""}
                  onChange={(e) => manejarCambioRadio(pregunta.id, e.target.value)}
                >
                  {pregunta.opciones.map((opcion, i) => (
                    <FormControlLabel
                      key={i}
                      value={opcion}
                      control={<Radio />}
                      label={opcion}
                      disabled={submitted}
                      sx={{ mb: 0.2 }}
                    />
                  ))}
                </RadioGroup>
                {resultados && (
                  <Box className={`resultado ${resultados[index]?.correcto ? "correcto" : "incorrecto"}`}>
                    {resultados[index]?.correcto 
                    ? <span style={{ color: 'green', fontSize: '1rem' }}>Correcto</span>
                    : <span style={{ color: 'red', fontSize: '1rem' }}>●<span style={{ color: 'black' }}>{pregunta.respuestasCorrectas.join(", ")}</span></span>
                    }
                  </Box>
                )}
              </CardContent>
            </StyledCard>
          ))}
          <Box display="flex" justifyContent="center" mt={4}>
            {!submitted ? (
              <SubmitButton
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                endIcon={<SendIcon />}
              >
                Enviar Respuestas
              </SubmitButton>
            ) : (
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
        </div>
      </Box>
    </Container>
  );
}
