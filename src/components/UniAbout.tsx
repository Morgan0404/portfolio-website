import React from "react";
import Navbar from "@/components/Navbar";
import CoursePanel from "@/components/CoursePannel"; // Adjust the path as needed

export default function UniAbout() {
    return (
        <div>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-20">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-4xl font-bold text-center mt-8">My University Courses</h1>

                    <CoursePanel
                        heading="First Year"
                        courses={[
                            {
                                title: "Introduction to Programming",
                                details: [
                                    "Design algorithms using sequence, iteration, and selection",
                                    "Write, compile, test, and debug a computer program",
                                    "Translate procedural programs for execution on a computer",
                                    "Systematically test and document software to standards",
                                    "Apply divide-and-conquer strategy in algorithms",
                                    "Familiarity with basic numerical and discrete algorithms",
                                    "Break down problems systematically into components",
                                ],
                            },
                            {
                                title: "Data Structures and Algorithms",
                                details: [
                                    "Demonstrate familiarity with fundamental data structures used in computing",
                                    "Use abstract data types to specify data structures and derive their properties",
                                    "Describe algorithm properties and their relationship to programs and heuristics",
                                    "Provide rigorous specifications of algorithms and construct pseudocode solutions",
                                    "Demonstrate awareness of termination and correctness with simple examples",
                                    "Utilise recursion and iteration to construct algorithms",
                                    "Explain computational complexity, including space and time complexity evaluation",
                                    "Understand NP-completeness, give examples, and explain its significance in computation"
                                ]
                            },
                            { title: "Discrete Maths For Computer Science", details: [
                                    "Number systems: natural numbers, integers, rationals, reals, complex numbers",
                                    "Number representation: decimal, binary, hexadecimal, two's complement, fixed-point, floating-point",
                                    "Computer arithmetic: addition, subtraction, multiplication, division",
                                    "Set theory: intersection, union, complement, power set, Cartesian product",
                                    "Functions and relations",
                                    "Methods of proof",
                                    "Propositional and first-order logic",
                                    "Sums of finite and infinite series",
                                    "Counting principles: addition and multiplication principles, permutations, combinations",
                                    "Graph theory: basic concepts, trees, balanced trees"
                                ] },
                            { title: "Computational Maths", details: [
                                    "Vectors and multidimensional spaces, matrices and operations (interpolation)",
                                    "Matrix operations: products, transpose, inverse, and determinants (e.g., rotation matrices)",
                                    "Eigen decomposition and solving systems of linear equations",
                                    "Derivatives in vector spaces: differential equations, partial derivatives, gradient, and Hessian",
                                    "Taylor expansion",
                                    "Optimization and numerical search: linear optimization, gradient descent, Newton method",
                                    "Numerical methods",
                                    "Statistics and probabilities: random variables, distributions (normal vs uniform), conditional probabilities",
                                    "Independence, marginalization, expectation, variance, and covariance",
                                    "Bayesian inference and Markov Chains"
                                ] },
                            { title: "Object Orientated Programming", details: [
                                    "Appreciation of object-oriented modeling techniques",
                                    "Interpretation and modification of program fragments in an object-oriented language",
                                    "Following an object-oriented development method to produce a design from a specification",
                                    "Systematic testing of programs developed",
                                    "Documenting software to accepted standards"
                                ]},
                            { title: "Web Development", details: [
                                    "The Hypertext Markup Language (HTML)",
                                    "The Document Object Model (DOM)",
                                    "Cascading Style Sheets (CSS)",
                                    "Client-side scripting language",
                                    "Server-side development",
                                    "The Hypertext Transfer Protocol (HTTP)",
                                    "A server-side programming language",
                                    "Processing input data",
                                    "Accessing databases",
                                    "Managing state",
                                    "Maintaining sessions",
                                    "Ensuring security"
                                ] },
                            { title: "Social and Professional Issues of the Information Age", details: [
                                    "Comprehend aspects of information technology regulated by the law",
                                    "Grasp the impact of information technology and related work practices on society",
                                    "Understand how a code of conduct (e.g., BCS) relates to practical professional dilemmas",
                                    "Appreciate different ethical theories on issues related to information technology"
                                ] }

                        ]}
                    />

                    <CoursePanel
                        heading="Second Year"
                        courses={[
                            { title: "Software Development", details: [
                            "Design patterns: builder pattern, singleton pattern, abstract factory method pattern, decorator pattern",
                            "Software development and testing: V-model, unit testing, code coverage, JUnit framework, mock objects, sophisticated IDEs, version control systems",
                            "Concurrency and multi-tasking: race conditions, locks, deadlock, starvation, synchronisation, thread management, thread states, remote method invocation",
                            "Advanced Java syntax and programming styles: generic programming, Java generics, event-driven programming, reflection, Java collections framework"
                            ] },
                            { title: "Computer Languages and representation (Functional and Logical programming)",  details: [
                            "Functional programming: Haskell",
                            "Logic programming: Prolog",
                            "Formal languages and finite-state machines"
                            ] },
                            { title: "Database Theory and Design", details: [
                                    "Relational model and its expression in SQL-92",
                                    "Information modelling and mapping to SQL",
                                    "Database design theory",
                                    "Transactions for integrity and recovery management",
                                    "Physical database implementation",
                                    "Dynamic modelling and user interaction via forms"
                                ] },
                            { title: "Artificial Intelligence", details: [
                                    "Philosophy of AI: Turing Test, Chinese Room, arguments and counter-arguments",
                                    "History of AI: Dartmouth Conference, early reasoning, natural language, microworlds, AI winter, connectionism, fifth generation project, embodied AI",
                                    "Logic and knowledge representation: first-order logic, reasoning strategies, logic programming",
                                    "Searching for solutions: hill-climbing, local search, simplex search, decision trees, minimax, A*",
                                    "Machine learning: supervised learning (kNN, decision trees, MLP), unsupervised learning (k-means clustering), learning and generalisation",
                                    "Natural language processing: N-Gram model, bigram and trigram HMM, part-of-speech tagging"
                                ] },
                            { title: "Network and Computer Security", details: [
                                    "Security concepts: integrity, reliability, availability",
                                    "Authentication and identification",
                                    "Access control models",
                                    "Cryptography: symmetric and asymmetric encryption, attacking encryption, signatures",
                                    "Security protocols: secure communication, formal modelling and analysis of security protocols",
                                    "Software security: vulnerabilities, secure software development, security testing"
                                ] },
                            { title: "Mobile and ubiquitous computing", details: [
                                    "Current mobile devices: hardware and software capabilities",
                                    "Introduction to mobile software development",
                                    "Building mobile applications",
                                    "Mobile sensors, touch and gesture recognition",
                                    "Network interaction and data handling on mobile platforms",
                                    "Connecting to external hardware",
                                    "Integration into mobile OS services",
                                    "Application distribution models",
                                    "Ubiquitous computing: past, present, and future"
                                ] },
                            { title: "Group Software development project", details: [
                                    "Software process models",
                                    "Team working and roles",
                                    "Agile methods",
                                    "Requirements engineering: elicitation, analysis, and specification",
                                    "User interface design and prototyping",
                                    "Software reuse: application frameworks and product lines",
                                    "Component-based systems",
                                    "Project planning and management"
                                ] },
                            { title: "Computer Science Research and Applications", details: [
                                    "What Computer Science research is",
                                    "Reasons for conducting Computer Science research",
                                    "The frontiers of Computer Science",
                                    "Importance of understanding Computer Science for applications",
                                    "How to find information in libraries and on the internet",
                                    "Elements of a good presentation",
                                    "How to write about and reference other people’s work",
                                    "Introduction to the LaTeX typesetting language",
                                    "Topics based on current research interests of lecturers",
                                    "Topics based on academic and industrial applications of Computer Science"
                                ] }


                        ]}
                    />

                    <CoursePanel
                        heading="Third Year"
                        courses={[
                            { title: "Individual Literature Review and Project (Final Year Project)", details: ["Brain tumour detection Using ML (In progress)"] },
                            { title: "Machine Learning And AI", details: [
                                    "Bayesian methods: theoretical perspectives, conjugate families, Monte Carlo sampling methods, approximations including Laplace approximations, variational approximation, expectation propagation",
                                    "Neural Networks: Introduction to deep learning, artificial neural networks (multi-layer perceptron), non-linear activation functions, gradient descent and backpropagation",
                                    "Information theory: information, entropy, coding, learning from an information-theoretic point of view",
                                    "Learning in spatially and temporally connected models: Hidden Markov models, Markov Random Fields",
                                    "Reinforcement learning: Multi-armed bandits, finite Markov decision processes, temporal difference learning, on and off policy learning"
                                ] },
                            { title: "Learning From Data", details: [
                                    "Supervised Learning – Classification and Regression: Decision tree, Similarity-based Learning, Error-based learning, Neural Network concepts, Ensemble learning concepts, Model and classifier evaluation",
                                    "Unsupervised Learning: Clustering (hierarchical, partitional, density-based), Cluster Evaluation, Association Rules",
                                    "Data description and pre-processing: Handling class imbalance and resampling, Missing values and imputation, Noise and Outlier Detection, Feature Selection"
                                ] },
                            { title: "Enterprise Computing", details: [
                                    "Service composition and interoperability",
                                    "JavaScript Object Notation (JSON)",
                                    "The Extensible Markup Language (XML)",
                                    "Service-Oriented Architectures (SOA)",
                                    "Representational State Transfer (REST)",
                                    "Database integrity and scalability",
                                    "Data warehousing",
                                    "NoSQL databases",
                                    "Cloud computing",
                                    "Management and governance",
                                    "Data mining and analytics"
                                ]},
                            { title: "Nature Inspired Computation", details: [
                                    "Classical vs. nature-inspired computation",
                                    "Evolutionary algorithms (including genetic programming and multi-objective evolutionary algorithms)",
                                    "Ant colony optimisation",
                                    "Particle swarm optimisation",
                                    "Swarm intelligence",
                                    "Neural computation (including multi-layer perceptrons and self-organising maps)"
                                ] },
                            { title: "Algorithms that changed the world", details: [
                                    "Introduction: What is an algorithm?",
                                    "Specification and pseudo-code",
                                    "Recapitulation of: correctness; algorithms vs. heuristics; space and time complexity; iteration and recursion; NP-completeness",
                                    "A study of specific algorithms, problems, and techniques selected from:",
                                    "Google: PageRank, Internet routing algorithm, Linear programming, Simplex algorithm for optimization",
                                    "Data compression, Kalman filter, Algorithms on graphs",
                                    "Fast Fourier transform, Public-key encryption, Monte Carlo integration"
                                ] }
                        ]}
                    />
                </div>
            </main>
        </div>
    );
}
