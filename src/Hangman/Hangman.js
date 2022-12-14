import React, { useEffect, useState } from "react";
import Figure from "./Figure";
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import WordPopup from "./WordPopup";
import { motion } from "framer-motion";

const words = [
  "application",
  "programming",
  "interface",
  "wizard",
  "librarian",
  "granite",
  "trampoline",
  "garage",
  "retraction",
  "reminiscing",
  "nicotine",
  "rattling",
  "summon",
  "jumping",
  "entangle",
  "euphoric",
  "caramel",
  "dreaming",
  "responsible",
  "cannabis",
  "raspberry",
  "lemonade",
  "classified",
  "rabbit",
  "repeating",
  "mentioned",
  "provide",
  "established",
  "democracy",
  "renting",
  "liberty",
  "construction",
  "trembling",
  "salmon",
  "laughter",
  "serpentine",
  "retirement",
  "attraction",
  "rebel",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];
const Hangman = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <div className="game-container">
        <h1 className="font-effect-3d">HangMan</h1>
        <br />
        <motion.div
          className="container"
          initial={{ scale: 0 }}
          animate={{ rotate: -360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
          }}
        >
          <Figure wrongLetters={wrongLetters} />
        </motion.div>
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <WordPopup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
    </>
  );
};

export default Hangman;
