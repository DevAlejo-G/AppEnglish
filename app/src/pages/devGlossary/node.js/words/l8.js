//objeto process
export const preguntasIniciales = [
  {
    id: 1,
    texto: '',
    palabra: 'process.env',
    opciones: [
      'Accesses environment variables.',
      'Gets current working directory.',
      'Reads user input.',
      'Returns system architecture.',
      'Prints to standard output.',
      'Terminates the current process.'
    ],
    respuestasCorrectas: ['Accesses environment variables.']
  },
  {
    id: 2,
    texto: '',
    palabra: 'process.argv',
    opciones: [
      'Gets command-line arguments.',
      'Gets system arguments.',
      'Sets environment variables.',
      'Executes a new process.',
      'Returns memory usage.',
      'Shows current PID.'
    ],
    respuestasCorrectas: ['Gets command-line arguments.']
  },
  {
    id: 3,
    texto: '',
    palabra: 'process.exit()',
    opciones: [
      'Exits the current process.',
      'Restarts the process.',
      'Prints a message before quitting.',
      'Pauses the process.',
      'Kills another process.',
      'Flushes memory.'
    ],
    respuestasCorrectas: ['Exits the current process.']
  },
  {
    id: 4,
    texto: '',
    palabra: 'process.pid',
    opciones: [
      'Returns the current process ID.',
      'Returns the parent process ID.',
      'Returns the thread ID.',
      'Returns CPU usage.',
      'Returns the OS process name.',
      'Returns the process uptime.'
    ],
    respuestasCorrectas: ['Returns the current process ID.']
  },
  {
    id: 5,
    texto: '',
    palabra: 'process.cwd()',
    opciones: [
      'Returns the current working directory.',
      'Returns the user’s home directory.',
      'Changes the working directory.',
      'Returns system path variables.',
      'Gets the project root.',
      'Returns temp directory.'
    ],
    respuestasCorrectas: ['Returns the current working directory.']
  },
  {
    id: 6,
    texto: '',
    palabra: 'process.nextTick()',
    opciones: [
      'Executes a callback on the next event loop tick.',
      'Schedules a task for later.',
      'Pauses execution for a set time.',
      'Runs after all I/O events.',
      'Executes before exit.',
      'Runs after `setImmediate`.'
    ],
    respuestasCorrectas: ['Executes a callback on the next event loop tick.']
  },
  {
    id: 7,
    texto: '',
    palabra: 'process.stdout / process.stderr',
    opciones: [
      'Writes to the standard output or error stream.',
      'Redirects system logs.',
      'Monitors file changes.',
      'Reads input from user.',
      'Sends data to another process.',
      'Displays alerts in GUI.'
    ],
    respuestasCorrectas: ['Writes to the standard output or error stream.']
  },
  {
    id: 8,
    texto: '',
    palabra: 'process.stdin',
    opciones: [
      'Captures input from the user.',
      'Displays data to the user.',
      'Clears the input buffer.',
      'Saves data to a file.',
      'Executes a script.',
      'Restarts the process.'
    ],
    respuestasCorrectas: ['Captures input from the user.']
  },
  {
    id: 9,
    texto: '',
    palabra: 'process.memoryUsage()',
    opciones: [
      'Returns memory usage details of the process.',
      'Returns CPU usage.',
      'Clears memory cache.',
      'Monitors system memory.',
      'Returns total system RAM.',
      'Tracks memory leaks.'
    ],
    respuestasCorrectas: ['Returns memory usage details of the process.']
  },
  {
    id: 10,
    texto: '',
    palabra: 'process.uptime()',
    opciones: [
      'Returns how long the process has been running in seconds.',
      'Returns system uptime.',
      'Returns server response time.',
      'Returns idle time.',
      'Returns CPU runtime.',
      'Returns time since last restart.'
    ],
    respuestasCorrectas: ['Returns how long the process has been running in seconds.']
  }
];
