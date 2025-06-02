import React from 'react';

interface QuizProps {
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
  onComplete: (score: number) => void;
}

const Quiz = ({ questions, onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswers, setSelectedAnswers] = React.useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const handleAnswerSelect = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      let correctCount = 0;
      selectedAnswers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
          correctCount++;
        }
      });
      setScore(correctCount);
      setQuizCompleted(true);
      onComplete(correctCount);
    }
  };

  const retakeQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setQuizCompleted(false);
    setScore(0);
  };

  if (quizCompleted) {
    return (
      <div className="quiz-results">
        <h3>Quiz Results</h3>
        <p>You scored {score} out of {questions.length}!</p>
        <button className="btn" onClick={retakeQuiz}>Retake Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz-question">
      <h3>Question {currentQuestion + 1} of {questions.length}</h3>
      <p>{questions[currentQuestion].question}</p>
      <div className="quiz-options">
        {questions[currentQuestion].options.map((option, index) => (
          <div 
            key={index} 
            className={`quiz-option ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
            onClick={() => handleAnswerSelect(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <button 
        className="btn" 
        onClick={nextQuestion}
        disabled={selectedAnswers[currentQuestion] === undefined}
      >
        {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
      </button>
    </div>
  );
};

export default Quiz;
