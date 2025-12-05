export const LinAlgebra = {
  "l101_1_1": {
    lesson_id: "l101_1_1",
    title: "What is Linear Algebra?",
    video_url: "https://odysee.com/@gatesmashers:1e9/lec-1-algebra-of-matrices-linear-algebra:6",
    thumbnail: "/vite.svg",
    transcript: `Welcome to Linear Algebra! In this introductory lesson, we'll explore what linear algebra is and why it's fundamental to mathematics, computer science, and engineering.

Linear algebra is the branch of mathematics concerning linear equations, linear functions, and their representations through matrices and vector spaces. It's the foundation for understanding systems of linear equations, transformations, and much more.

Key concepts we'll cover in this course:
- Vectors and vector operations
- Matrices and matrix operations
- Linear transformations
- Eigenvalues and eigenvectors

Linear algebra has countless applications in modern technology, from computer graphics and machine learning to quantum mechanics and economics.`,
    resources: [
      { title: "Course Syllabus", url: "/resources/101_syllabus.pdf", type: "pdf" },
      { title: "Notation Guide", url: "/resources/101_notation.pdf", type: "pdf" }
    ],
    notes: "This is a foundational course. Make sure you're comfortable with basic algebra before proceeding."
  },

  "l101_1_2": {
    lesson_id: "l101_1_2",
    title: "Real-world Applications",
    video_url: "/videos/courses/101/module1/applications.mp4",
    thumbnail: "/thumbnails/101_1_2.jpg",
    transcript: `Linear algebra isn't just theoretical—it powers the technology you use every day!

Applications include:
1. Computer Graphics: Rotating, scaling, and transforming 3D objects
2. Machine Learning: Neural networks rely heavily on matrix operations
3. Physics: Describing quantum states and solving differential equations
4. Economics: Input-output models and optimization problems
5. Data Compression: JPEG and MP3 use linear algebra concepts

In this lesson, we'll see concrete examples of how these concepts work in practice.`,
    resources: [
      { title: "Applications Cheat Sheet", url: "/resources/101_applications.pdf", type: "pdf" }
    ],
    notes: "Pay attention to how matrices can represent transformations!"
  },

  "l101_1_3": {
    lesson_id: "l101_1_3",
    title: "Course Overview and Prerequisites",
    type: "article",
    thumbnail: "/thumbnails/101_1_3.jpg",
    markdown_content: `# Course Overview and Prerequisites

## What You'll Learn

This course covers the fundamental concepts of linear algebra over 4 comprehensive modules:

### Module 1: Introduction
- Understand what linear algebra is
- See real-world applications
- Get familiar with course structure

### Module 2: Vectors and Spaces
- Vector operations and properties
- Vector spaces and subspaces
- Linear independence

### Module 3: Matrices and Determinants
- Matrix operations
- Inverse matrices
- Determinants and their properties

### Module 4: Eigenvalues and Eigenvectors
- Computing eigenvalues
- Finding eigenvectors
- Diagonalization techniques

## Prerequisites

- **Algebra**: You should be comfortable with algebraic manipulation
- **Basic Calculus**: Understanding derivatives helps but isn't required
- **Mathematical Maturity**: Ability to work with abstract concepts

## Course Format

- Video lectures with examples
- Practice exercises after each module
- Quizzes to test your understanding
- Final comprehensive exam

## Time Commitment

Expect to spend 6-8 hours per week for 8 weeks to complete this course.`,
    resources: [
      { title: "Recommended Textbooks", url: "/resources/101_books.pdf", type: "pdf" }
    ],
    notes: "Make sure you meet the prerequisites before starting!"
  },

  "l101_1_4": {
    lesson_id: "l101_1_4",
    title: "Module 1 Quiz",
    type: "quiz",
    duration: "15 min",
    passing_score: 70,
    quiz_data: {
      questions: [
        {
          question_id: "q1",
          question: "What is linear algebra primarily concerned with?",
          type: "multiple_choice",
          options: [
            "Curved surfaces and non-linear functions",
            "Linear equations, functions, and their representations",
            "Only geometric shapes",
            "Statistical analysis"
          ],
          correct_answer: 1,
          explanation: "Linear algebra deals with linear equations, linear functions, and their representations through matrices and vector spaces."
        },
        {
          question_id: "q2",
          question: "Which of the following is NOT a typical application of linear algebra?",
          type: "multiple_choice",
          options: [
            "Computer graphics transformations",
            "Machine learning algorithms",
            "Cooking recipes",
            "Quantum mechanics"
          ],
          correct_answer: 2,
          explanation: "While linear algebra is used in many fields, cooking recipes don't typically require linear algebra concepts."
        },
        {
          question_id: "q3",
          question: "Linear algebra is used in machine learning.",
          type: "true_false",
          correct_answer: true,
          explanation: "Matrix operations are fundamental to neural networks and many machine learning algorithms."
        },
        {
          question_id: "q4",
          question: "Which prerequisite is most important for this course?",
          type: "multiple_choice",
          options: [
            "Advanced physics knowledge",
            "Programming skills",
            "Basic algebra",
            "Biology background"
          ],
          correct_answer: 2,
          explanation: "A solid foundation in basic algebra is essential for understanding linear algebra concepts."
        }
      ]
    },
    notes: "You need 70% to pass. You can retake this quiz up to 3 times."
  },

  "l101_2_1": {
    lesson_id: "l101_2_1",
    title: "Introduction to Vectors",
    video_url: "/videos/courses/101/module2/vectors_intro.mp4",
    thumbnail: "/thumbnails/101_2_1.jpg",
    transcript: `Now we begin our journey into vectors—one of the most important concepts in linear algebra.

A vector is a mathematical object that has both magnitude and direction. Think of it as an arrow in space.

Notation: We typically write vectors as bold lowercase letters (v, u) or with arrows (→v).

A vector in 2D space: v = [3, 4]
- The first component (3) tells us movement in x-direction
- The second component (4) tells us movement in y-direction

Vectors can exist in any dimension:
- 2D: [x, y]
- 3D: [x, y, z]
- nD: [x₁, x₂, ..., xₙ]

In this lesson, we'll explore:
1. Vector notation
2. Geometric interpretation
3. Component form vs. geometric form`,
    resources: [
      { title: "Vector Basics Worksheet", url: "/resources/101_vectors_basics.pdf", type: "pdf" },
      { title: "Interactive Vector Tool", url: "/tools/vector_visualizer", type: "interactive" }
    ],
    notes: "Visualizing vectors geometrically will help you understand operations better!"
  },

  "l101_2_2": {
    lesson_id: "l101_2_2",
    title: "Vector Operations",
    video_url: "/videos/courses/101/module2/vector_operations.mp4",
    thumbnail: "/thumbnails/101_2_2.jpg",
    transcript: `Let's learn the fundamental operations we can perform on vectors.

**Vector Addition:**
Add corresponding components:
[a₁, a₂] + [b₁, b₂] = [a₁+b₁, a₂+b₂]

Example: [3, 4] + [1, 2] = [4, 6]

Geometrically: Place vectors tip-to-tail

**Scalar Multiplication:**
Multiply each component by a scalar:
c[a₁, a₂] = [ca₁, ca₂]

Example: 2[3, 4] = [6, 8]

Geometrically: Scales the vector's length

**Vector Subtraction:**
[a₁, a₂] - [b₁, b₂] = [a₁-b₁, a₂-b₂]

**Dot Product:**
[a₁, a₂] · [b₁, b₂] = a₁b₁ + a₂b₂

Result is a scalar, not a vector!

**Vector Magnitude:**
|v| = √(v₁² + v₂² + ... + vₙ²)

Example: |[3, 4]| = √(9+16) = 5`,
    resources: [
      { title: "Vector Operations Guide", url: "/resources/101_vector_ops.pdf", type: "pdf" }
    ],
    notes: "Practice these operations—they're the building blocks for everything else!"
  },

  "l101_2_3": {
    lesson_id: "l101_2_3",
    title: "Vector Spaces Fundamentals",
    video_url: "/videos/courses/101/module2/vector_spaces.mp4",
    thumbnail: "/thumbnails/101_2_3.jpg",
    transcript: `A vector space is a collection of vectors that can be added together and multiplied by scalars while satisfying certain axioms.

**Definition:**
A vector space V over a field F is a set with two operations:
1. Vector addition: u + v
2. Scalar multiplication: cv

**Required Properties (Axioms):**
1. Closure under addition
2. Commutativity: u + v = v + u
3. Associativity: (u + v) + w = u + (v + w)
4. Zero vector exists: v + 0 = v
5. Additive inverse: v + (-v) = 0
6. Closure under scalar multiplication
7. Distributivity over vector addition
8. Distributivity over scalar addition
9. Scalar multiplication associativity
10. Identity element: 1v = v

**Examples of Vector Spaces:**
- ℝⁿ (all n-tuples of real numbers)
- Matrices of size m×n
- Polynomials of degree ≤ n
- Continuous functions`,
    resources: [
      { title: "Vector Space Axioms", url: "/resources/101_vector_space_axioms.pdf", type: "pdf" }
    ],
    notes: "These axioms might seem abstract, but they ensure consistency across all operations."
  },

  "l101_2_4": {
    lesson_id: "l101_2_4",
    title: "Subspaces",
    video_url: "/videos/courses/101/module2/subspaces.mp4",
    thumbnail: "/thumbnails/101_2_4.jpg",
    transcript: `A subspace is a subset of a vector space that is itself a vector space.

**Subspace Test:**
A subset H of vector space V is a subspace if:
1. Zero vector is in H
2. Closed under addition: if u, v ∈ H, then u + v ∈ H
3. Closed under scalar multiplication: if v ∈ H and c is a scalar, then cv ∈ H

**Common Subspaces:**
- Column space of a matrix
- Null space (kernel) of a matrix
- Row space of a matrix

**Examples:**
In ℝ³:
- Any line through the origin is a subspace
- Any plane through the origin is a subspace
- The origin itself {0} is a subspace
- All of ℝ³ is a subspace

**Non-example:**
A line NOT through the origin is NOT a subspace (doesn't contain zero vector)`,
    resources: [
      { title: "Subspace Examples", url: "/resources/101_subspaces.pdf", type: "pdf" }
    ],
    notes: "The zero vector must always be in a subspace—this is often the quickest check!"
  },

  "l101_2_5": {
    lesson_id: "l101_2_5",
    title: "Practice Problems",
    type: "exercise",
    exercises: [
      {
        problem: "Given vectors u = [2, -1, 3] and v = [1, 4, -2], compute u + v and 3u.",
        solution: "u + v = [3, 3, 1] and 3u = [6, -3, 9]",
        hints: ["Add corresponding components", "Multiply each component by the scalar"]
      },
      {
        problem: "Calculate the dot product of a = [1, 2, 3] and b = [4, -5, 6].",
        solution: "a · b = 1(4) + 2(-5) + 3(6) = 4 - 10 + 18 = 12",
        hints: ["Multiply corresponding components and sum"]
      },
      {
        problem: "Find the magnitude of vector v = [3, -4].",
        solution: "|v| = √(3² + (-4)²) = √(9 + 16) = √25 = 5",
        hints: ["Use the formula √(v₁² + v₂²)"]
      },
      {
        problem: "Determine if H = {[x, 0] : x ∈ ℝ} is a subspace of ℝ².",
        solution: "Yes, it's a subspace. Contains zero vector [0,0], closed under addition and scalar multiplication.",
        hints: ["Check the three subspace conditions", "This is the x-axis"]
      }
    ],
    resources: [
      { title: "Solutions Manual", url: "/resources/101_module2_solutions.pdf", type: "pdf" }
    ],
    notes: "Try to solve without looking at hints first!"
  },

  "l101_2_6": {
    lesson_id: "l101_2_6",
    title: "Module 2 Quiz",
    type: "quiz",
    passing_score: 70,
    quiz_data: {
      questions: [
        {
          question_id: "q1",
          question: "What is the result of [2, 3] + [1, -1]?",
          type: "multiple_choice",
          options: ["[3, 2]", "[2, 4]", "[1, 2]", "[3, 4]"],
          correct_answer: 0,
          explanation: "Add corresponding components: [2+1, 3+(-1)] = [3, 2]"
        },
        {
          question_id: "q2",
          question: "The dot product of two vectors always produces another vector.",
          type: "true_false",
          correct_answer: false,
          explanation: "The dot product produces a scalar (a single number), not a vector."
        },
        {
          question_id: "q3",
          question: "Which is NOT required for a subset to be a subspace?",
          type: "multiple_choice",
          options: [
            "Contains the zero vector",
            "Closed under addition",
            "Contains at least 3 vectors",
            "Closed under scalar multiplication"
          ],
          correct_answer: 2,
          explanation: "A subspace doesn't need a minimum number of vectors. It needs zero vector, closure under addition, and closure under scalar multiplication."
        }
      ]
    }
  },

  "l101_3_1": {
    lesson_id: "l101_3_1",
    title: "Introduction to Matrices",
    video_url: "/videos/courses/101/module3/matrices_intro.mp4",
    thumbnail: "/thumbnails/101_3_1.jpg",
    transcript: `Welcome to Module 3! We're now ready to tackle matrices—rectangular arrays of numbers that are incredibly powerful.

A matrix is a rectangular array of numbers arranged in rows and columns.

Example of a 2×3 matrix (2 rows, 3 columns):
A = [1  2  3]
    [4  5  6]

**Matrix Dimensions:** m×n where m = rows, n = columns

**Special Types of Matrices:**
- Square matrix: m = n (same number of rows and columns)
- Row matrix: 1×n (single row)
- Column matrix: m×1 (single column)
- Zero matrix: all elements are 0
- Identity matrix: square matrix with 1s on diagonal, 0s elsewhere

**Notation:**
- Capital letters for matrices: A, B, C
- Element notation: aᵢⱼ (element in row i, column j)

**Matrices Represent:**
- Systems of linear equations
- Linear transformations
- Data in machine learning
- Relationships between variables`,
    resources: [
      { title: "Matrix Notation Guide", url: "/resources/101_matrix_notation.pdf", type: "pdf" },
      { title: "Matrix Examples", url: "/resources/101_matrix_examples.pdf", type: "pdf" }
    ],
    notes: "Understanding matrix dimensions is crucial for performing operations correctly."
  },

  "l101_3_2": {
    lesson_id: "l101_3_2",
    title: "Matrix Operations",
    video_url: "/videos/courses/101/module3/matrix_operations.mp4",
    thumbnail: "/thumbnails/101_3_2.jpg",
    transcript: `Let's learn basic operations on matrices.

**Matrix Addition:**
Add corresponding elements (matrices must have same dimensions)

[1  2] + [5  6] = [6   8]
[3  4]   [7  8]   [10 12]

**Scalar Multiplication:**
Multiply each element by the scalar

3[1  2] = [3  6]
 [3  4]   [9 12]

**Matrix Subtraction:**
Subtract corresponding elements

[5  6] - [1  2] = [4  4]
[7  8]   [3  4]   [4  4]

**Transpose:**
Flip rows and columns (denoted Aᵀ)

If A = [1  2  3]  then Aᵀ = [1  4]
       [4  5  6]            [2  5]
                            [3  6]

**Properties:**
- (A + B)ᵀ = Aᵀ + Bᵀ
- (cA)ᵀ = cAᵀ
- (Aᵀ)ᵀ = A`,
    resources: [
      { title: "Matrix Operations Worksheet", url: "/resources/101_matrix_ops.pdf", type: "pdf" }
    ],
    notes: "Matrices must have the same dimensions for addition/subtraction!"
  },

  "l101_3_3": {
    lesson_id: "l101_3_3",
    title: "Matrix Multiplication",
    video_url: "/videos/courses/101/module3/matrix_multiplication.mp4",
    thumbnail: "/thumbnails/101_3_3.jpg",
    transcript: `Matrix multiplication is more complex but incredibly important!

**Rule:** For matrices A(m×n) and B(n×p), the product AB is (m×p)
- Number of columns in A must equal number of rows in B

**Computation:**
Element (i,j) of AB = dot product of row i of A with column j of B

Example:
[1  2] × [5  6] = [1·5+2·7  1·6+2·8] = [19  22]
[3  4]   [7  8]   [3·5+4·7  3·6+4·8]   [43  50]

**Properties:**
- NOT commutative: AB ≠ BA (in general)
- Associative: (AB)C = A(BC)
- Distributive: A(B+C) = AB + AC
- Identity: AI = IA = A

**Why It Matters:**
- Represents composition of transformations
- Used in solving systems of equations
- Foundation of neural networks`,
    resources: [
      { title: "Matrix Multiplication Guide", url: "/resources/101_matrix_mult.pdf", type: "pdf" }
    ],
    notes: "Matrix multiplication is NOT commutative—order matters!"
  },

  "l101_4_1": {
    lesson_id: "l101_4_1",
    title: "What are Eigenvalues?",
    video_url: "/videos/courses/101/module4/eigenvalues_intro.mp4",
    thumbnail: "/thumbnails/101_4_1.jpg",
    transcript: `Welcome to the final module! Eigenvalues and eigenvectors are among the most important concepts in linear algebra.

**Eigenvalue Definition:**
Given a square matrix A, if there exists a non-zero vector v and a scalar λ such that:
Av = λv

Then:
- λ (lambda) is called an eigenvalue
- v is called an eigenvector

**Geometric Interpretation:**
When we multiply a matrix A by its eigenvector v, the result is the same vector v scaled by λ. The direction doesn't change—only the magnitude!

**Why Are Eigenvalues Important?**
1. Stability analysis in differential equations
2. Principal Component Analysis (PCA) in data science
3. Google's PageRank algorithm
4. Quantum mechanics
5. Vibration analysis in engineering

**Example:**
If A = [2  0]    and v = [1]
       [0  3]           [0]

Then Av = [2] = 2[1] = 2v
          [0]    [0]

So λ = 2 is an eigenvalue with eigenvector v = [1, 0]`,
    resources: [
      { title: "Eigenvalue Properties", url: "/resources/101_eigen_properties.pdf", type: "pdf" },
      { title: "Visual Guide to Eigenvalues", url: "/resources/101_eigen_visual.pdf", type: "pdf" }
    ],
    notes: "The geometric intuition is key: eigenvectors show directions that are only scaled, not rotated!"
  },

  "l101_4_2": {
    lesson_id: "l101_4_2",
    title: "Finding Eigenvalues",
    video_url: "/videos/courses/101/module4/finding_eigenvalues.mp4",
    thumbnail: "/thumbnails/101_4_2.jpg",
    transcript: `Let's learn the systematic process for finding eigenvalues.

**The Characteristic Equation:**
From Av = λv, we can rewrite as:
Av - λv = 0
(A - λI)v = 0

For non-zero v to exist, the matrix (A - λI) must be singular:
det(A - λI) = 0

This is the **characteristic equation**.

**Step-by-Step Process:**
1. Form matrix (A - λI)
2. Calculate det(A - λI)
3. Solve det(A - λI) = 0 for λ

**Example:**
A = [4  1]
    [2  3]

A - λI = [4-λ   1  ]
         [2     3-λ]

det(A - λI) = (4-λ)(3-λ) - 2
            = 12 - 7λ + λ² - 2
            = λ² - 7λ + 10
            = (λ-5)(λ-2)

Eigenvalues: λ₁ = 5, λ₂ = 2`,
    resources: [
      { title: "Characteristic Equation Examples", url: "/resources/101_char_eq.pdf", type: "pdf" }
    ],
    notes: "For 2×2 matrices, you'll get a quadratic equation. For 3×3, a cubic equation."
  }
};