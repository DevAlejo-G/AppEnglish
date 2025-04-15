export const speakWord = (word, voice = "US English Male") => {
  if (typeof window.responsiveVoice !== "undefined") {
    window.responsiveVoice.speak(word, voice, {
      onstart: () => console.log(`Empezando a pronunciar: ${word}`),
      onend: () => console.log(`Finalizó la pronunciación: ${word}`),
    });
  } else {
    console.error("ResponsiveVoice no está cargado.");
  }
};


export const speakWord2 = (word, voice = "Spanish Male") => {
  if (typeof window.responsiveVoice !== "undefined") {
    window.responsiveVoice.speak(word, voice, {
      onstart: () => console.log(`Empezando a pronunciar: ${word}`),
      onend: () => console.log(`Finalizó la pronunciación: ${word}`),
    });
  } else {
    console.error("ResponsiveVoice no está cargado.");
  }
};

// esta api est asociada a el archivo reportWebVitals.js