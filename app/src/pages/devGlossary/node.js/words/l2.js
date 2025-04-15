//module http
export const preguntasIniciales = [
  {
    id: 1,
    texto: '',
    palabra: 'http.createServer()',
    opciones: [
      'Creates an HTTP server.',
      'Handles incoming HTTP requests.',
      'Handles HTTPS requests.',
      'Logs HTTP requests.',
      'Sends HTTP responses.',
      'Closes the HTTP server.'
    ],
    respuestasCorrectas: ['Creates an HTTP server.']
  },
  {
    id: 2,
    texto: '',
    palabra: 'server.listen()',
    opciones: [
      'Binds the server to a specific port and starts listening for requests.',
      'Closes the server after handling all requests.',
      'Handles incoming HTTP requests.',
      'Sends a response to the client.',
      'Logs incoming requests.',
      'Sets the HTTP headers for the response.'
    ],
    respuestasCorrectas: ['Binds the server to a specific port and starts listening for requests.']
  },
  {
    id: 3,
    texto: '',
    palabra: 'server.close()',
    opciones: [
      'Closes the HTTP server.',
      'Stops the server from listening on a port.',
      'Waits for the server to finish processing before closing.',
      'Logs when the server is closed.',
      'Deletes the server instance.',
      'Shuts down the server forcefully.'
    ],
    respuestasCorrectas: ['Closes the HTTP server.']
  },
  {
    id: 4,
    texto: '',
    palabra: 'http.request()',
    opciones: [
      'Makes custom HTTP requests.',
      'Creates a new HTTP server.',
      'Handles the HTTP response.',
      'Manages incoming HTTP requests.',
      'Closes an existing HTTP connection.',
      'Sets headers for HTTP requests.'
    ],
    respuestasCorrectas: ['Makes custom HTTP requests.']
  },
  {
    id: 5,
    texto: '',
    palabra: 'http.get()',
    opciones: [
      'Simpler method for making HTTP GET requests.',
      'Sends a custom HTTP request.',
      'Creates an HTTP server.',
      'Handles response from a GET request.',
      'Reads data from an HTTP server.',
      'Retrieves headers from an HTTP request.'
    ],
    respuestasCorrectas: ['Simpler method for making HTTP GET requests.']
  },
  {
    id: 6,
    texto: '',
    palabra: 'req.method',
    opciones: [
      'Gets the HTTP method of the request.',
      'Returns the URL of the request.',
      'Returns the headers of the request.',
      'Sets the method of the request.',
      'Sends the request data.',
      'Logs the incoming request method.'
    ],
    respuestasCorrectas: ['Gets the HTTP method of the request.']
  },
  {
    id: 7,
    texto: '',
    palabra: 'req.url',
    opciones: [
      'Gets the URL of the incoming request.',
      'Sets the URL of the request.',
      'Returns the headers of the request.',
      'Gets the method of the request.',
      'Modifies the request data.',
      'Logs the incoming request URL.'
    ],
    respuestasCorrectas: ['Gets the URL of the incoming request.']
  },
  {
    id: 8,
    texto: '',
    palabra: 'req.headers',
    opciones: [
      'Accesses the headers of the request.',
      'Gets the body of the request.',
      'Sets the request headers.',
      'Gets the URL of the request.',
      'Returns the HTTP status code.',
      'Sets the request method.'
    ],
    respuestasCorrectas: ['Accesses the headers of the request.']
  },
  {
    id: 9,
    texto: '',
    palabra: 'res.write()',
    opciones: [
      'Writes data to the response.',
      'Ends the response and sends it to the client.',
      'Sets the headers of the response.',
      'Handles the request body.',
      'Logs the outgoing response.',
      'Sets the status code of the response.'
    ],
    respuestasCorrectas: ['Writes data to the response.']
  },
  {
    id: 10,
    texto: '',
    palabra: 'res.end()',
    opciones: [
      'Ends the response and sends it to the client.',
      'Writes data to the response.',
      'Sets the headers of the response.',
      'Returns the status code.',
      'Sets the HTTP method.',
      'Closes the request connection.'
    ],
    respuestasCorrectas: ['Ends the response and sends it to the client.']
  },
  {
    id: 11,
    texto: '',
    palabra: 'res.setHeader()',
    opciones: [
      'Sets HTTP headers for the response.',
      'Writes the response data.',
      'Ends the response.',
      'Sets the status code for the response.',
      'Sets the request headers.',
      'Returns the response body.'
    ],
    respuestasCorrectas: ['Sets HTTP headers for the response.']
  },
  {
    id: 12,
    texto: '',
    palabra: 'res.statusCode',
    opciones: [
      'Sets the HTTP status code of the response.',
      'Gets the status code of the request.',
      'Writes the response data.',
      'Sets the headers of the response.',
      'Gets the body of the response.',
      'Closes the response.'
    ],
    respuestasCorrectas: ['Sets the HTTP status code of the response.']
  }
];
