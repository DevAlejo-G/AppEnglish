import React from 'react';
import { Box, MenuItem, Select } from "@mui/material";
import { Translate } from "@mui/icons-material";

const LanguageSelector = ({ selectedLanguage, setSelectedLanguage, languages }) => {
  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
  };

  return (
    <Box mt={2}>
      <Select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        startAdornment={<Translate sx={{ mr: 1 }} />}
        variant="outlined"
        displayEmpty
        fullWidth
      >
        {languages.map((lang) => (
          <MenuItem key={lang.id} value={lang.code}>
            {lang.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default LanguageSelector;
