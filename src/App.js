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
  const [infos, setInfos] = useState({
    name: 'Phoenix Wright',
    role: 'Defense Attorney',
    contact: '0912334555466',
    email: 'theaceattorney12#@gmail.com',
    site: 'https://github.com/daphoenix12#',
  });

  const handleMode = (e) => {
    e.preventDefault();
    setMode((prevState) =>
      e.target.value === 'edit' ? (prevState = true) : (prevState = false)
    );
  };

  const handleChange = (e) => {
    setInfos({
      ...infos, //save the current state of  all values
      [e.target.name]: e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  };

  const handleSubmit = (e) => {
    setInfos({
      ...infos,
    });
    e.preventDefault();
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
          <GeneralInfoAlter
            infos={infos}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      ) : (
        <div className="preview"> You're in Preview Mode</div>
      )}
    </div>
  );
}

export default App;
