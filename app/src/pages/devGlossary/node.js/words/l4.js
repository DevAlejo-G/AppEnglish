//module crypto
export const preguntasIniciales = [
  {
    id: 1,
    texto: '',
    palabra: 'crypto.createHash()',
    opciones: [
      'Creates a cryptographic hash.',
      'Generates a random key.',
      'Encrypts data using a specific key.',
      'Verifies digital signatures.',
      'Derives keys from a password.',
      'Signs data using a private key.'
    ],
    respuestasCorrectas: ['Creates a cryptographic hash.']
  },
  {
    id: 2,
    texto: '',
    palabra: 'crypto.createHmac()',
    opciones: [
      'Generates a message authentication code with a secret key.',
      'Creates a cryptographic hash.',
      'Encrypts data with a key.',
      'Derives keys from a password.',
      'Generates a random sequence of bytes.',
      'Verifies a digital signature.'
    ],
    respuestasCorrectas: ['Generates a message authentication code with a secret key.']
  },
  {
    id: 3,
    texto: '',
    palabra: 'crypto.pbkdf2()',
    opciones: [
      'Derives keys using the PBKDF2 algorithm.',
      'Generates a random encryption key.',
      'Encrypts data with a public key.',
      'Verifies a signature using a secret key.',
      'Signs data with a private key.',
      'Creates a cryptographic hash.'
    ],
    respuestasCorrectas: ['Derives keys using the PBKDF2 algorithm.']
  },
  {
    id: 4,
    texto: '',
    palabra: 'crypto.randomBytes()',
    opciones: [
      'Generates random bytes for security.',
      'Creates a cryptographic hash.',
      'Encrypts data using a secret key.',
      'Signs data using a private key.',
      'Verifies a digital signature.',
      'Derives keys from a password.'
    ],
    respuestasCorrectas: ['Generates random bytes for security.']
  },
  {
    id: 5,
    texto: '',
    palabra: 'crypto.createCipheriv()',
    opciones: [
      'Encrypts data using a specific algorithm and key.',
      'Decrypts data with a specific algorithm and key.',
      'Generates a random encryption key.',
      'Signs data using a private key.',
      'Verifies the integrity of data.',
      'Generates a message authentication code.'
    ],
    respuestasCorrectas: ['Encrypts data using a specific algorithm and key.']
  },
  {
    id: 6,
    texto: '',
    palabra: 'crypto.createDecipheriv()',
    opciones: [
      'Decrypts previously encrypted data.',
      'Encrypts data using a specific algorithm and key.',
      'Signs data using a private key.',
      'Verifies a digital signature.',
      'Generates random encryption keys.',
      'Derives keys from a password.'
    ],
    respuestasCorrectas: ['Decrypts previously encrypted data.']
  },
  {
    id: 7,
    texto: '',
    palabra: 'crypto.sign()',
    opciones: [
      'Digitally signs data.',
      'Verifies a digital signature.',
      'Encrypts data with a public key.',
      'Generates a random encryption key.',
      'Derives keys using the PBKDF2 algorithm.',
      'Encrypts data using a symmetric key.'
    ],
    respuestasCorrectas: ['Digitally signs data.']
  },
  {
    id: 8,
    texto: '',
    palabra: 'crypto.verify()',
    opciones: [
      'Verifies digital signatures.',
      'Encrypts data with a public key.',
      'Generates a random key pair.',
      'Decrypts data using a private key.',
      'Signs data using a private key.',
      'Derives keys from a password.'
    ],
    respuestasCorrectas: ['Verifies digital signatures.']
  },
  {
    id: 9,
    texto: '',
    palabra: 'crypto.generateKeyPair()',
    opciones: [
      'Generates public and private key pairs.',
      'Generates a random encryption key.',
      'Signs data using a private key.',
      'Encrypts data with a public key.',
      'Verifies the integrity of data.',
      'Creates a cryptographic hash.'
    ],
    respuestasCorrectas: ['Generates public and private key pairs.']
  },
  {
    id: 10,
    texto: '',
    palabra: 'crypto.publicEncrypt()',
    opciones: [
      'Encrypts data with a public key.',
      'Signs data using a private key.',
      'Decrypts data using a private key.',
      'Generates random bytes for security.',
      'Verifies a digital signature.',
      'Creates a cryptographic hash.'
    ],
    respuestasCorrectas: ['Encrypts data with a public key.']
  },
  {
    id: 11,
    texto: '',
    palabra: 'crypto.privateDecrypt()',
    opciones: [
      'Decrypts data using a private key.',
      'Encrypts data with a public key.',
      'Generates random bytes for security.',
      'Signs data with a private key.',
      'Verifies the integrity of data.',
      'Creates a cryptographic hash.'
    ],
    respuestasCorrectas: ['Decrypts data using a private key.']
  }
];
