export const quizData = {
  101: {
    0: [ // Vectors and Spaces
      {
        question: "Which of these is a vector?",
        options: ["5", "[1, 2, 3]", "x^2 + y^2", "sin(x)"],
        answer: 1
      },
      {
        question: "The dimension of a vector space is determined by?",
        options: ["Number of vectors", "Number of linearly independent vectors", "Length of vectors", "None of these"],
        answer: 1
      }
    ],
    1: [ // Matrices & Determinants
      {
        question: "What is the determinant of a 2x2 matrix [[a, b],[c,d]]?",
        options: ["a+b+c+d", "ad-bc", "ab-cd", "a*d+c*b"],
        answer: 1
      },
      {
        question: "Matrix multiplication is commutative?",
        options: ["Yes", "No"],
        answer: 1
      }
    ],
    2: [ // Eigenvalues & Eigenvectors
      {
        question: "Eigenvectors of a matrix are:",
        options: ["Vectors scaled by matrix", "Determinants", "Rows of the matrix", "Columns of the matrix"],
        answer: 0
      },
      {
        question: "Eigenvalues are:",
        options: ["Scalars corresponding to eigenvectors", "Vectors", "Matrix inverses", "None of these"],
        answer: 0
      }
    ]
  },

  102: {
    0: [ // Limits & Continuity
      {
        question: "What is the limit of x^2 as x approaches 2?",
        options: ["2", "4", "0", "Infinity"],
        answer: 1
      },
      {
        question: "A function is continuous if:",
        options: ["Limit exists and equals function value", "Derivative exists", "Integral exists", "None of these"],
        answer: 0
      }
    ],
    1: [ // Differentiation Techniques
      {
        question: "Derivative of x^3 is:",
        options: ["3x^2", "x^2", "3x", "x^3"],
        answer: 0
      },
      {
        question: "Power rule: d/dx[x^n] = ?",
        options: ["nx^(n-1)", "x^n", "n^x", "x^(n+1)"],
        answer: 0
      }
    ],
    2: [ // Intro to Integrals
      {
        question: "Integral of x dx is:",
        options: ["x^2/2 + C", "x^2 + C", "ln(x)", "1/x"],
        answer: 0
      },
      {
        question: "∫a dx = ?",
        options: ["ax + C", "a + C", "x/a + C", "None of these"],
        answer: 0
      }
    ]
  },

  103: {
    0: [ // JS Introduction
      {
        question: "Which keyword declares a variable in JS?",
        options: ["var", "let", "const", "All of these"],
        answer: 3
      },
      {
        question: "JS is:",
        options: ["Backend only", "Frontend only", "Both frontend and backend", "Database language"],
        answer: 2
      }
    ],
    1: [ // Variables & Data Types
      {
        question: "Type of 123 in JS?",
        options: ["Number", "String", "Boolean", "Undefined"],
        answer: 0
      },
      {
        question: "Type of 'true' in JS?",
        options: ["String", "Boolean", "Number", "Object"],
        answer: 1
      }
    ],
    2: [ // Loops & Functions in JS
      {
        question: "Which loop executes at least once?",
        options: ["for", "while", "do-while", "None"],
        answer: 2
      },
      {
        question: "A function in JS is defined by?",
        options: ["function keyword", "def keyword", "func keyword", "method keyword"],
        answer: 0
      }
    ]
  },

  104: {
    0: [ // HTML Basics
      {
        question: "HTML stands for?",
        options: ["Hyper Text Markup Language", "Hyper Tool Markup Language", "Hyperlinks Text Mark Language", "Home Tool Markup Language"],
        answer: 0
      },
      {
        question: "The <a> tag defines?",
        options: ["Anchor/Link", "Paragraph", "Image", "Header"],
        answer: 0
      }
    ],
    1: [ // CSS Basics
      {
        question: "CSS stands for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        answer: 0
      },
      {
        question: "To select all <p> tags in CSS, we use?",
        options: ["p", ".p", "#p", "*p"],
        answer: 0
      }
    ]
  },

  105: {
    0: [ // Grammar Basics
      {
        question: "Identify the noun: 'The cat sleeps.'",
        options: ["cat", "sleeps", "the", "None"],
        answer: 0
      },
      {
        question: "Identify the verb: 'She runs fast.'",
        options: ["She", "runs", "fast", "None"],
        answer: 1
      }
    ],
    1: [ // Sentence Structure
      {
        question: "Subject in 'John eats an apple.' is?",
        options: ["John", "eats", "apple", "an"],
        answer: 0
      },
      {
        question: "Object in 'She reads a book.' is?",
        options: ["She", "reads", "book", "a"],
        answer: 2
      }
    ]
  }
};
