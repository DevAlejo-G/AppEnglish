//module fs
export const preguntasIniciales = [
  {
    id: 1,
    texto: '',
    palabra: 'fs.readFileSync()',
    opciones: [
      'Reads a file synchronously.',
      'Writes to a file.',
      'Deletes a file.',
      'Creates a directory.',
      'Renames a file.',
      'Checks if a file exists.'
    ],
    respuestasCorrectas: ['Reads a file synchronously.']
  },
  {
    id: 2,
    texto: '',
    palabra: 'fs.writeFileSync()',
    opciones: [
      'Writes data to a file synchronously.',
      'Reads data from a file.',
      'Appends data to the end of a file.',
      'Deletes a directory.',
      'Gets file information.',
      'Renames a file.'
    ],
    respuestasCorrectas: ['Writes data to a file synchronously.']
  },
  {
    id: 3,
    texto: '',
    palabra: 'fs.appendFileSync()',
    opciones: [
      'Appends data to the end of a file.',
      'Creates a new file.',
      'Overwrites a file with new data.',
      'Reads specific lines from a file.',
      'Gets the file size.',
      'Checks if a directory exists.'
    ],
    respuestasCorrectas: ['Appends data to the end of a file.']
  },
  {
    id: 4,
    texto: '',
    palabra: 'fs.unlinkSync()',
    opciones: [
      'Deletes a file.',
      'Deletes a directory.',
      'Renames a file.',
      'Checks if a file exists.',
      'Writes to a file.',
      'Reads a binary file.'
    ],
    respuestasCorrectas: ['Deletes a file.']
  },
  {
    id: 5,
    texto: '',
    palabra: 'fs.renameSync()',
    opciones: [
      'Renames or moves a file.',
      'Creates a new file.',
      'Gets information about a file.',
      'Appends data to a file.',
      'Deletes a file.',
      'Renames a directory.'
    ],
    respuestasCorrectas: ['Renames or moves a file.']
  },
  {
    id: 6,
    texto: '',
    palabra: 'fs.stat()',
    opciones: [
      'Gets information about a file or directory.',
      'Checks if a file exists.',
      'Reads the contents of a file.',
      'Renames a file.',
      'Creates a directory.',
      'Deletes a file.'
    ],
    respuestasCorrectas: ['Gets information about a file or directory.']
  },
  {
    id: 7,
    texto: '',
    palabra: 'fs.mkdir()',
    opciones: [
      'Creates a new directory.',
      'Reads files in a directory.',
      'Deletes a file.',
      'Renames a directory.',
      'Gets system information.',
      'Adds files to a directory.'
    ],
    respuestasCorrectas: ['Creates a new directory.']
  },
  {
    id: 8,
    texto: '',
    palabra: 'fs.readdir()',
    opciones: [
      'Reads the contents of a directory.',
      'Writes files to a directory.',
      'Creates multiple folders.',
      'Deletes old files.',
      'Changes folder permissions.',
      'Checks if a file is in use.'
    ],
    respuestasCorrectas: ['Reads the contents of a directory.']
  },
  {
    id: 9,
    texto: '',
    palabra: 'fs.existsSync()',
    opciones: [
      'Checks if a file or directory exists.',
      'Reads the contents of a file.',
      'Deletes a file if it exists.',
      'Renames a file conditionally.',
      'Gets the absolute path.',
      'Checks read permissions.'
    ],
    respuestasCorrectas: ['Checks if a file or directory exists.']
  },
  {
    id: 10,
    texto: '',
    palabra: 'fs.rm()',
    opciones: [
      'Deletes files or directories (more flexible than fs.unlinkSync).',
      'Renames files.',
      'Reads multiple files at once.',
      'Modifies permissions.',
      'Checks if a file is locked.',
      'Gets system info.'
    ],
    respuestasCorrectas: ['Deletes files or directories (more flexible than fs.unlinkSync).']
  },
  {
    id: 11,
    texto: '',
    palabra: 'fs.rmdir()',
    opciones: [
      'Removes a directory (fs.rm() is more modern and recommended).',
      'Creates a new file.',
      'Gets folder size.',
      'Renames a file.',
      'Checks system space.',
      'Reads hidden files.'
    ],
    respuestasCorrectas: ['Removes a directory (fs.rm() is more modern and recommended).']
  }
];
