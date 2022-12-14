import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  padding: "12px",
  margin: "0 6px 6px",
  background: "lightseagreen",
  textDecoration: "none",
  color: "white",
  borderRadius: "10px",
};
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const HomePage = () => {
  return (
    <div className="HomePage">
      <motion.div
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 720, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        <h1 className="font-effect-3d-float">Semi-Addicting Games</h1>
      </motion.div>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        <Item1 />
        <Item2 />
        <Item3 />
      </motion.ul>
    </div>
  );
};

const Item1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <motion.li
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div className="avatar" layout />
      <h2 className='font-effect-fire-animation'>TicTacToe</h2>
      <AnimatePresence>{isOpen && <Game1 />}</AnimatePresence>
    </motion.li>
  );
};
const Item2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <motion.li
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div className="avatar" layout />
      <h2 className="font-effect-3d">HangMan</h2>
      <AnimatePresence>{isOpen && <Game2 />}</AnimatePresence>
    </motion.li>
  );
};
const Item3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <motion.li
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div className="avatar" layout />
      <h2 className='font-effect-anaglyph'>Construction Zone</h2>
      <AnimatePresence>{isOpen && <Game3 />}</AnimatePresence>
    </motion.li>
  );
};
const Game1 = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src="https://i.imgur.com/6sCseoN.png" alt="TicTacToe" />
      <br />
      <NavLink exact to="/tic_tac_toe" style={linkStyles} className="links">
        Play Game
      </NavLink>
    </motion.div>
  );
};
const Game2 = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src="https://i.imgur.com/mrTXM2l.png" alt="Hangman" />
      <br />
      <NavLink exact to="/hangman" style={linkStyles} className="links">
        Play Game
      </NavLink>
    </motion.div>
  );
};
const Game3 = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img
        src="https://i.giphy.com/media/3o7btQ0NH6Kl8CxCfK/giphy.webp"
        alt="Construction"
      />
      <br />
      <NavLink exact to="/workinprogress" style={linkStyles} className="links">
        Play Game
      </NavLink>
    </motion.div>
  );
};
export default HomePage;
