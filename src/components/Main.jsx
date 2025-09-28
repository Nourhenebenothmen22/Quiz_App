import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlayCircle, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setUsername } from "../redux/quizSlice"; // <-- importe ton action

function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStart = () => {
    const name = inputRef.current.value.trim();
    if (name) {
      dispatch(setUsername(name)); // ✅ stocke le username dans Redux
      navigate("/quiz");          // ✅ redirige vers Quiz
    } else {
      alert("Please enter your username!"); // sécurité
    }
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #f093fb, #f5576c 100%)",
        minHeight: "100vh",
        margin: 0,
        padding: "20px"
      }}
    >
      <div
        className="card shadow-lg p-4 border-0"
        style={{ 
          maxWidth: "600px", 
          width: "100%", 
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)"
        }}
      >
        <h2 className="text-center mb-4 text-primary fw-bold">
          🎯 Quiz Application
        </h2>

        <ol className="mb-4">
          <li>✅ You will be asked 10 questions one after another.</li>
          <li>🏆 10 points are awarded for the correct answer.</li>
          <li>🔘 Each question has three options. You can choose only one.</li>
          <li>🔄 You can review and change answers before finishing.</li>
          <li>📊 Results will be declared at the end of the quiz.</li>
        </ol>

        {/* Username input */}
        <div className="input-group mb-3">
          <span 
            className="input-group-text text-white"
            style={{ background: "linear-gradient(45deg, #f093fb, #f5576c)" }}
          >
            <FaUser />
          </span>
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Enter your username"
          />
        </div>

        {/* Bouton stylisé */}
        <div className="d-grid">
          <button
            onClick={handleStart} // <-- on clique, on enregistre le username
            className="btn btn-lg d-flex align-items-center justify-content-center gap-2 text-white"
            style={{ 
              borderRadius: "50px",
              background: "linear-gradient(45deg, #f093fb, #f5576c)",
              border: "none",
              fontWeight: "bold"
            }}
          >
            <FaPlayCircle size={24} />
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
