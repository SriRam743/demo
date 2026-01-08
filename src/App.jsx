import "./App.css";

function App() {
  return (
    <div className="page">
      {/* Internal CSS */}
      <style>
        {`
          .name {
            font-size: 22px;
            font-weight: bold;
            color: #2c3e50;
            margin: 10px 0 5px;
          }

          .role {
            font-size: 16px;
            color: #7f8c8d;
            margin-bottom: 10px;
          }
        `}
      </style>

      <div className="card">
        {/* Inline CSS */}
        <img
          src="image.png"
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "3px solid #3498db"
          }}
        />

        <div className="name">Jannu</div>
        <div className="role">Frontend Developer</div>

        <p className="bio">
          Passionate about building responsive web applications using React.
        </p>

        <button className="btn">Follow</button>
      </div>
    </div>
  );
}

export default App;
