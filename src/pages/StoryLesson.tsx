import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface StoryData {
  id: string;
  title: string;
  level: string;
  audio: string;
  darijaText: string;
  msaText: string;
  englishText: string;
  vocabulary: {
    word: string;
    transliteration: string;
    translation: string;
    example: string;
  }[];
  culturalNote: {
    title: string;
    content: string;
  };
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

const StoryLesson = () => {
  const { id } = useParams<{ id: string }>();
  const [story, setStory] = useState<StoryData | null>(null);
  const [activeTab, setActiveTab] = useState('darija');
  const [showVocabulary, setShowVocabulary] = useState(true);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchStory = () => {
      // Mock data for demonstration
      const storyData: StoryData = {
        id: 'buying-bread',
        title: 'Buying Bread at the Souk',
        level: 'Beginner',
        audio: '/src/assets/audio/buying-bread.mp3',
        darijaText: `محمد: صباح الخير. واش عندك الخبز طري؟
بائع: صباح النور. إيه، عندي خبز طري. شحال بغيتي؟
محمد: بغيت جوج ديال الخبزات، عافاك.
بائع: مزيان. غادي يكون عشرة دراهم.
محمد: ها هوما عشرة دراهم. شكرا بزاف.
بائع: بصحتك. نهارك زين.`,
        msaText: `محمد: صباح الخير. هل لديك خبز طازج؟
البائع: صباح النور. نعم، لدي خبز طازج. كم تريد؟
محمد: أريد رغيفين من الخبز، من فضلك.
البائع: حسنا. سيكون عشرة دراهم.
محمد: ها هي عشرة دراهم. شكرا جزيلا.
البائع: بالصحة. يومك سعيد.`,
        englishText: `Mohammed: Good morning. Do you have fresh bread?
Seller: Good morning. Yes, I have fresh bread. How many do you want?
Mohammed: I want two loaves of bread, please.
Seller: Good. That will be ten dirhams.
Mohammed: Here are ten dirhams. Thank you very much.
Seller: Enjoy. Have a nice day.`,
        vocabulary: [
          {
            word: 'الخبز',
            transliteration: 'l-khobz',
            translation: 'bread',
            example: 'بغيت الخبز طري (I want fresh bread)'
          },
          {
            word: 'طري',
            transliteration: 'tri',
            translation: 'fresh',
            example: 'هاد الخبز طري (This bread is fresh)'
          },
          {
            word: 'شحال',
            transliteration: 'shhal',
            translation: 'how much/many',
            example: 'شحال بغيتي؟ (How many do you want?)'
          },
          {
            word: 'جوج',
            transliteration: 'jooj',
            translation: 'two',
            example: 'بغيت جوج ديال التفاحات (I want two apples)'
          },
          {
            word: 'عافاك',
            transliteration: '3afak',
            translation: 'please',
            example: 'عطيني الما، عافاك (Give me water, please)'
          }
        ],
        culturalNote: {
          title: 'Haggling in Moroccan Markets',
          content: 'In Moroccan souks (markets), haggling is a common practice and even expected for most purchases. However, for everyday staples like bread, the price is usually fixed. Bread is a fundamental part of Moroccan cuisine and is present at almost every meal. The most common type is a round, flat loaf called "khobz." Fresh bread is typically purchased daily, as Moroccans value freshness in their bread.'
        },
        quiz: [
          {
            question: 'How does Mohammed greet the seller?',
            options: [
              'Marhaba',
              'Sabah al-khair',
              'Salam alaikum',
              'La bas'
            ],
            correctAnswer: 1
          },
          {
            question: 'How many loaves of bread does Mohammed want?',
            options: [
              'One',
              'Two',
              'Three',
              'Four'
            ],
            correctAnswer: 1
          },
          {
            question: 'How much does Mohammed pay for the bread?',
            options: [
              'Five dirhams',
              'Ten dirhams',
              'Fifteen dirhams',
              'Twenty dirhams'
            ],
            correctAnswer: 1
          }
        ]
      };
      
      setStory(storyData);
    };
    
    fetchStory();
  }, [id]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const toggleVocabulary = () => {
    setShowVocabulary(!showVocabulary);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setQuizCompleted(false);
    setScore(0);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < (story?.quiz.length || 0) - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      let correctCount = 0;
      selectedAnswers.forEach((answer, index) => {
        if (story && answer === story.quiz[index].correctAnswer) {
          correctCount++;
        }
      });
      setScore(correctCount);
      setQuizCompleted(true);
    }
  };

  if (!story) {
    return <div className="container">Loading story...</div>;
  }

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">{story.title}</h1>
        <div className="story-meta">
          <span>{story.level}</span>
        </div>
        
        <div className="lesson-container">
          <div className="lesson-content">
            {/* Audio Player */}
            <div className="audio-player">
              <audio controls src={story.audio}>
                Your browser does not support the audio element.
              </audio>
            </div>
            
            {/* Tabbed Text Display */}
            <div className="tabs">
              <div className="tab-buttons">
                <button 
                  className={`tab-button ${activeTab === 'darija' ? 'active' : ''}`}
                  onClick={() => handleTabChange('darija')}
                >
                  Darija Only
                </button>
                <button 
                  className={`tab-button ${activeTab === 'darija-msa' ? 'active' : ''}`}
                  onClick={() => handleTabChange('darija-msa')}
                >
                  Darija + MSA
                </button>
                <button 
                  className={`tab-button ${activeTab === 'darija-english' ? 'active' : ''}`}
                  onClick={() => handleTabChange('darija-english')}
                >
                  Darija + English
                </button>
              </div>
              
              <div className="tab-content">
                {activeTab === 'darija' && (
                  <div className="text-content">
                    <pre className="story-text">{story.darijaText}</pre>
                  </div>
                )}
                
                {activeTab === 'darija-msa' && (
                  <div className="text-content parallel">
                    <div className="column">
                      <h3>Darija</h3>
                      <pre className="story-text">{story.darijaText}</pre>
                    </div>
                    <div className="column">
                      <h3>Modern Standard Arabic</h3>
                      <pre className="story-text">{story.msaText}</pre>
                    </div>
                  </div>
                )}
                
                {activeTab === 'darija-english' && (
                  <div className="text-content parallel">
                    <div className="column">
                      <h3>Darija</h3>
                      <pre className="story-text">{story.darijaText}</pre>
                    </div>
                    <div className="column">
                      <h3>English</h3>
                      <pre className="story-text">{story.englishText}</pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Cultural Note */}
            <div className="cultural-note">
              <h3>{story.culturalNote.title}</h3>
              <p>{story.culturalNote.content}</p>
            </div>
            
            {/* Quiz Section */}
            {!quizStarted ? (
              <div className="quiz-intro">
                <h3>Test Your Understanding</h3>
                <p>Take a short quiz to check your comprehension of this story.</p>
                <button className="btn" onClick={startQuiz}>Start Quiz</button>
              </div>
            ) : !quizCompleted ? (
              <div className="quiz-question">
                <h3>Question {currentQuestion + 1} of {story.quiz.length}</h3>
                <p>{story.quiz[currentQuestion].question}</p>
                <div className="quiz-options">
                  {story.quiz[currentQuestion].options.map((option, index) => (
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
                  {currentQuestion < story.quiz.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </button>
              </div>
            ) : (
              <div className="quiz-results">
                <h3>Quiz Results</h3>
                <p>You scored {score} out of {story.quiz.length}!</p>
                <button className="btn" onClick={startQuiz}>Retake Quiz</button>
              </div>
            )}
          </div>
          
          {/* Vocabulary Sidebar */}
          <div className={`vocabulary-sidebar ${showVocabulary ? '' : 'collapsed'}`}>
            <div className="vocabulary-header" onClick={toggleVocabulary}>
              <h3>Vocabulary</h3>
              <span>{showVocabulary ? '−' : '+'}</span>
            </div>
            
            {showVocabulary && (
              <div className="vocabulary-list">
                {story.vocabulary.map((item, index) => (
                  <div key={index} className="vocabulary-item">
                    <div className="vocabulary-word">{item.word}</div>
                    <div className="vocabulary-transliteration">{item.transliteration}</div>
                    <div className="vocabulary-translation">{item.translation}</div>
                    <div className="vocabulary-example">{item.example}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="lesson-navigation">
          <a href="/stories" className="btn btn-outline">Back to Stories</a>
          <a href="/story/family-dinner" className="btn">Next Story</a>
        </div>
      </div>
    </div>
  );
};

export default StoryLesson;
