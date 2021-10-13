import React from 'react';
import styled from 'styled-components';
import './App.css';
import GeneralInfoAlter from './components/GeneralInfoAlter';

const ModeButton = styled.button`
  background: green;
  padding: 10px 30px 10px 30px;
  color: white;
  font-size: 20px;
`;

function App() {
  return (
    <div className="App">
      <ModeButton>Edit Mode</ModeButton>
      <ModeButton>Preview Mode</ModeButton>
      <div className="edit">
        <GeneralInfoAlter />
      </div>
      <div className="preview"></div>
    </div>
  );
}

export default App;
