import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import GeneralInfoAlter from './components/GeneralInfoAlter';
import GeneralInfoPreview from './components/GeneralInfoPreview';

const ModeButton = styled.button`
  background: green;
  min-width: 100px;
  padding: 10px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const Document = styled.div`
  margin: 0 auto;
  max-width: 545px;
  min-height: 842px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

function App() {
  const [mode, setMode] = useState(true);
  const [infos, setInfos] = useState({
    name: 'Phoenix Wright',
    role: 'Defense Attorney',
    contact: '0912334555466',
    email: 'theaceattorney12@gmail.com',
    site: 'https://github.com/daphoenix12',
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

  // const handleSubmit = (e) => {
  //   setInfos({
  //     ...infos,
  //   });
  //   e.preventDefault();
  // };

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
          <h1> You are in Edit Mode!</h1>
          <GeneralInfoAlter infos={infos} handleChange={handleChange} />
        </div>
      ) : (
        <div className="preview">
          <h1>You're in Preview Mode</h1>
          <Document>
            <GeneralInfoPreview infos={infos} />
          </Document>
        </div>
      )}
    </div>
  );
}

export default App;
