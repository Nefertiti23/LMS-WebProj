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
  }
}