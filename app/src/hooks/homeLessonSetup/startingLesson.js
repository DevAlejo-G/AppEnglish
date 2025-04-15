import React from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Grid, CardContent, Box } from "@mui/material";
import { FaStar } from "react-icons/fa";
import { LessonCard, LessonIndicator, PracticeLessonCard, StyledButton, DynamicTitle } from "hooks/homeLessonSetup/lessonStyles";

function getTitleClass(titulo) {
  if (titulo.length > 20) {
    return "smaller";
  } else if (titulo.length > 15) {
    return "small";
  } else {
    return "";
  }
}

function ConfiguracionHome({ lecciones = [], titulo = "", basePath }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 6 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom color="#1A4B84">
        {titulo}
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {lecciones.length > 0 ? (
          lecciones.map((leccion) => (
            <Grid item xs={12} sm={6} md={4} key={leccion.id}>
              <Link to={`${basePath}${leccion.id}`} style={{ textDecoration: 'none' }}>
                {leccion.esPractica ? (
                  <PracticeLessonCard>
                    <CardContent className="card-content">
                      <Box display="flex" alignItems="center" justifyContent="center" mb={3}>
                        <FaStar size={28} color="#FF9800" aria-hidden="true" />
                        <DynamicTitle variant="h6" className={getTitleClass(leccion.titulo) + " lesson-title-practice"}>
                          {leccion.titulo}
                        </DynamicTitle>
                      </Box>
                      <Typography variant="body2" align="center" className="lesson-description">
                        ¡Practica todas las lecciones y mejora!
                      </Typography>
                      <Box display="flex" justifyContent="center" mt={3}>
                        <StyledButton variant="contained" isPractice>
                          Start Practice
                        </StyledButton>
                      </Box>
                    </CardContent>
                  </PracticeLessonCard>
                ) : (
                  <LessonCard>
                    <LessonIndicator>{leccion.id}</LessonIndicator>
                    <CardContent className="card-content">
                      <Box display="flex" alignItems="center" justifyContent="center" mb={3}>
                        <DynamicTitle variant="h6" className={getTitleClass(leccion.titulo) + " lesson-title"}>
                          {leccion.titulo}
                        </DynamicTitle>
                      </Box>
                      <Typography variant="body2" align="center" className="lesson-description">
                        Compuesto por {leccion.preguntas} preguntas
                      </Typography>
                      <Box display="flex" justifyContent="center" mt={3}>
                        <StyledButton variant="contained">
                          Start Lesson
                        </StyledButton>
                      </Box>
                    </CardContent>
                  </LessonCard>
                )}
              </Link>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" align="center" color="error">
            No hay lecciones disponibles.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default ConfiguracionHome;
