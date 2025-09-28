import { createSlice } from "@reduxjs/toolkit";
import questions from "../database/data";

const initialState = {
  username: "",
  currentIndex: 0,
  answers: {},
  questions: questions,
  score: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setAnswer: (state, action) => {
      const { index, answer } = action.payload;
      state.answers[index] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
      }
    },
    calculateScore: (state) => {
      let score = 0;
      state.questions.forEach((q, idx) => {
        if (state.answers[idx] === q.answer) score += 10; // <-- correction ici
      });
      state.score = score;
    },
    resetQuiz: (state) => {
      state.currentIndex = 0;
      state.answers = {};
      state.score = 0;
      state.username = "";
    },
  },
});

export const {
  setUsername,
  setAnswer,
  nextQuestion,
  previousQuestion,
  calculateScore,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
