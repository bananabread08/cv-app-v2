import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import GeneralInfoAlter from './components/GeneralInfoAlter';

const ModeButton = styled.button`
  background: green;
  min-width: 100px;
  padding: 10px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

function App() {
  const [mode, setMode] = useState(true);

  const handleMode = (e) => {
    e.preventDefault();
    setMode((prevState) =>
      e.target.value === 'edit' ? (prevState = true) : (prevState = false)
    );
  };
  return (
    <div className="App">
      <ModeButton onClick={handleMode} value="edit">
        Edit
      </ModeButton>
      <ModeButton onClick={handleMode} value="preview">
        Preview
      </ModeButton>

      {mode ? (
        <div className="edit">
          You are in Edit Mode!
          <GeneralInfoAlter />
        </div>
      ) : (
        <div className="preview"> You're in Preview Mode</div>
      )}
    </div>
  );
}

export default App;
