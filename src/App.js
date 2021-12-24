import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import LettersBar from "./components/LettersBar";
import Notification from "./components/Notification";
import PlayAgain from "./components/PlayAgain";
import AdditionalInfo from "./components/AdditionalInfo";

const defaultHiddenWord = {
  word: "default",
  definition: "default",
};

const arrayAtoZ = [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));
//const wordUrl = "https://random-word-api.herokuapp.com/word?number=1&swear=0";  different words API
const wordUrl = "https://random-words-api.vercel.app/word";

function App() {
  const [playable, setPlayable] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [isWin, setIsWin] = useState(false);
  const [hiddenWord, setHiddenWord] = useState(defaultHiddenWord);

  const fetchtHiddenWord = async () => {
    const response = await fetch(wordUrl);
    const data = await response.json();
    setHiddenWord({ ...data[0], word: data[0].word.toLowerCase() });
  };

  const handleClickLetter = (e) => {
    if (playable) {
      let currentLetter = e.target.value;
      if (hiddenWord.word.includes(currentLetter)) {
        if (!correctLetters.includes(currentLetter)) {
          setCorrectLetters([...correctLetters, currentLetter]);
        } else {
          showAlert();
        }
      } else if (!wrongLetters.includes(currentLetter)) {
        setWrongLetters([...wrongLetters, currentLetter]);
      } else {
        showAlert();
      }
    } else {
      showAlert();
    }
  };

  const handleClickPlayAgain = (e) => {
    if (!playable) {
      setPlayable(true);
      setCorrectLetters([]);
      setWrongLetters([]);
      setIsWin(false);
      fetchtHiddenWord();
    }
  };

  useEffect(() => {
    if (wrongLetters.length === 6) {
      setPlayable(false);
    } else {
      for (let letter of hiddenWord.word) {
        if (!correctLetters.includes(letter)) {
          return;
        }
      }
      setIsWin(true);
      setPlayable(false);
    }
  }, [correctLetters, wrongLetters]);

  const showAlert = () => {
    setShowNotification(true);
  };

  useEffect(() => {
    fetchtHiddenWord();
  }, []);

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure numErrors={wrongLetters.length} />
        {/* <WrongLetters wrongLetters={wrongLetters} /> */}
        <LettersBar
          letters={arrayAtoZ}
          handleClick={handleClickLetter}
          wrongLetters={wrongLetters}
          correctLetters={correctLetters}
        />
        <Word
          isWin={isWin}
          hiddenWord={hiddenWord}
          correctLetters={correctLetters}
          playable={playable}
        />
        <AdditionalInfo hiddenWord={hiddenWord} />
        <PlayAgain playable={playable} handleClick={handleClickPlayAgain} />
      </div>
      <Notification
        isShow={showNotification}
        setShow={setShowNotification}
        playable={playable}
      />
    </>
  );
}

export default App;
