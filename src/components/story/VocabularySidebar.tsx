import React from 'react';

interface VocabularySidebarProps {
  vocabulary: {
    word: string;
    transliteration: string;
    translation: string;
    example: string;
  }[];
}

const VocabularySidebar = ({ vocabulary }: VocabularySidebarProps) => {
  const [showVocabulary, setShowVocabulary] = React.useState(true);

  const toggleVocabulary = () => {
    setShowVocabulary(!showVocabulary);
  };

  return (
    <div className={`vocabulary-sidebar ${showVocabulary ? '' : 'collapsed'}`}>
      <div className="vocabulary-header" onClick={toggleVocabulary}>
        <h3>Vocabulary</h3>
        <span>{showVocabulary ? '−' : '+'}</span>
      </div>
      
      {showVocabulary && (
        <div className="vocabulary-list">
          {vocabulary.map((item, index) => (
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
  );
};

export default VocabularySidebar;
