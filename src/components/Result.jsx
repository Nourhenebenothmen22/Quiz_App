import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from "../redux/quizSlice";

function Result() {
  const dispatch = useDispatch();

  // Récupérer les données du store
  const { username, score, questions, answers } = useSelector((state) => state.quiz);

  const totalPoints = questions.length * 10; // exemple : chaque question = 10 pts
  const totalQuestions = questions.length;
  const totalAttempts = Object.keys(answers).length;
  const earnPoints = score;
  const result = score >= totalPoints / 2 ? "Passed" : "Failed"; // règle simple : >= 50% => Passed

  const handleRestart = () => {
    dispatch(resetQuiz());
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "1rem",
      }}
    >
      <div
        className="card text-dark shadow-lg"
        style={{
          width: "28rem",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          border: "none",
          overflow: "hidden",
        }}
      >
        {/* En-tête */}
        <div
          className="card-header text-center text-white border-0"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            padding: "1.5rem 1rem",
          }}
        >
          <h2 className="fw-bold mb-1" style={{ fontSize: "1.5rem" }}>
            🎯 Quiz Result
          </h2>
          <p className="mb-0 opacity-90" style={{ fontSize: "0.9rem" }}>
            Congratulations on completing the quiz!
          </p>
        </div>

        <div className="card-body p-3">
          <ul className="list-unstyled fs-6 mb-3">
            {[
              { label: "👤 Username", value: username || "Anonymous", color: "text-primary", bg: "rgba(240, 147, 251, 0.1)" },
              { label: "⭐ Total Quiz Points", value: totalPoints, color: "text-warning", bg: "rgba(245, 87, 108, 0.1)" },
              { label: "❓ Total Questions", value: String(totalQuestions).padStart(2, "0"), color: "text-info", bg: "rgba(240, 147, 251, 0.1)" },
              { label: "📝 Total Attempts", value: String(totalAttempts).padStart(2, "0"), color: "text-secondary", bg: "rgba(245, 87, 108, 0.1)" },
              { label: "🏆 Total Earn Points", value: earnPoints, color: "text-success", bg: "rgba(240, 147, 251, 0.1)" },
            ].map((item, idx) => (
              <li
                key={idx}
                className="d-flex justify-content-between align-items-center mb-2 p-2 rounded-2"
                style={{ background: item.bg }}
              >
                <span className="fw-semibold" style={{ fontSize: "0.9rem" }}>{item.label}</span>
                <span className={`fw-bold ${item.color}`} style={{ fontSize: "0.9rem" }}>{item.value}</span>
              </li>
            ))}

            <li
              className="d-flex justify-content-between align-items-center p-2 rounded-2"
              style={{ background: "rgba(245, 87, 108, 0.1)" }}
            >
              <span className="fw-semibold" style={{ fontSize: "0.9rem" }}>📊 Quiz Result</span>
              <span
                className={`fw-bold px-2 py-1 rounded-pill ${
                  result === "Passed"
                    ? "text-success bg-success bg-opacity-10"
                    : "text-danger bg-danger bg-opacity-10"
                }`}
                style={{ fontSize: "0.85rem" }}
              >
                {result}
              </span>
            </li>
          </ul>

          {/* Bouton Restart */}
          <div className="text-center mt-3">
            <Link
              to="/"
              className="btn fw-bold"
              onClick={handleRestart}
              style={{
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                color: "white",
                borderRadius: "50px",
                padding: "0.5rem 1.5rem",
                fontSize: "0.9rem",
              }}
            >
              Restart Quiz
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="card-footer border-0 text-center bg-transparent pb-2">
          <div className="progress mb-1" style={{ height: "5px" }}>
            <div
              className="progress-bar rounded-pill"
              style={{
                width: `${(earnPoints / totalPoints) * 100}%`,
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              }}
            ></div>
          </div>
          <small className="text-muted" style={{ fontSize: "0.8rem" }}>
            Score: {earnPoints}/{totalPoints} points • {Math.round((earnPoints / totalPoints) * 100)}%
          </small>
        </div>
      </div>
    </div>
  );
}

export default Result;
