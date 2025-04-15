import React from 'react';
import { Box, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const LessonNavigation = ({ currentLesson, navigateLesson, totalLessons }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={2}>
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <IconButton
          onClick={() => navigateLesson("prev")}
          disabled={currentLesson === 1}
        >
          <ChevronLeft />
        </IconButton>
        <Typography variant="h6">Lección {currentLesson}</Typography>
        <IconButton
          onClick={() => navigateLesson("next")}
          disabled={currentLesson === totalLessons}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LessonNavigation;
