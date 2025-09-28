import React, { useState } from "react";
import "./Quiz.css";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer, nextQuestion, previousQuestion, calculateScore } from "../redux/quizSlice";

function Quiz() {
  const dispatch = useDispatch();
  const { currentIndex, questions, answers } = useSelector((state) => state.quiz);
  const [fade, setFade] = useState(true);

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (option) => {
    dispatch(setAnswer({ index: currentIndex, answer: option }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setFade(false);
      setTimeout(() => {
        dispatch(nextQuestion());
        setFade(true);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setFade(false);
      setTimeout(() => {
        dispatch(previousQuestion());
        setFade(true);
      }, 300);
    }
  };

  const handleSubmit = () => {
    dispatch(calculateScore());
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-start py-5 quiz-background">
      <h2
        className="mb-4 fw-bold text-center"
        style={{
          fontSize: "2rem",
          letterSpacing: "1px",
          color: "#ffffff",
          textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        🎉 Ready to Test Your Knowledge? 🧠✨
      </h2>

      <div className={`card p-4 shadow-lg quiz-card ${fade ? "fade-in" : "fade-out"}`}>
        <h5 className="mb-3">
          {currentQuestion.id}. {currentQuestion.question}
        </h5>

        <div className="d-flex flex-column gap-2 mt-2">
          {currentQuestion.options.map((opt, index) => (
            <button
              key={index}
              className={`btn text-start quiz-btn ${answers[currentIndex] === opt ? "selected" : ""}`}
              onClick={() => handleOptionClick(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-warning d-flex align-items-center gap-2"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            style={{ borderRadius: "50px" }}
          >
            <FaArrowLeft /> Previous
          </button>

          {currentIndex < questions.length - 1 ? (
            <button
              className="btn btn-info text-white d-flex align-items-center gap-2"
              onClick={handleNext}
              style={{ borderRadius: "50px" }}
            >
              Next <FaArrowRight />
            </button>
          ) : (
            <Link
              to={"/result"}
              className="btn btn-success d-flex align-items-center gap-2"
              onClick={handleSubmit}
              style={{ borderRadius: "50px" }}
            >
              Submit <FaCheckCircle />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
