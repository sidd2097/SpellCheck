import React, { useState } from 'react';
import './SpellCheck.css';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    setCorrection('');
    checkSpelling(inputText);
  };

  const checkSpelling = (inputText) => {
    const words = inputText.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      if (customDictionary[word]) {
        setCorrection(`Did you mean: ${customDictionary[word]}?`);
        return;
      }
    }
  };

  return (
    <div className="x-spellcheck">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        className="textarea"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text..."
      ></textarea>
      {correction && <p className="correction">{correction}</p>}
    </div>
  );
};

export default XSpellCheck;
