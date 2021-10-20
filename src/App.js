import React, { useState } from 'react';
//import styled from 'styled-components';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import uniqid from 'uniqid';
import { Button } from '@mui/material';

// const ModeButton = styled.button`
//   background: green;
//   min-width: 100px;
//   padding: 10px;
//   color: white;
//   font-size: 20px;
//   font-weight: 700;
//   cursor: pointer;
//   border-right: 1px solid white;
//   border-top-left-radius: 50px;
//   border-bottom-left-radius: 50px;

//   &:hover {
//     background: white;
//     border: 2px solid green;
//     color: green;
//   }
// `;

// const Document = styled.div`
//   margin: 0 auto;
//   max-width: 545px;
//   min-height: 842px;
//   background: #fff;
//   box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 15px;
// `;

function App() {
  const [schools, setSchools] = useState([]);

  const addSchool = (e) => {
    e.preventDefault();
    setSchools(schools.concat(uniqid()));
  };

  function deleteSchool(e) {
    e.preventDefault();
    const array = schools.filter((id) => id !== e.target.id);
    setSchools(array);
  }

  return (
    <div className="App">
      <GeneralInfo />
      <div>
        Education
        <Button variant="contained" onClick={addSchool}>
          Add
        </Button>
        {schools.map((id) => (
          <Education key={id} id={id} deleteSchool={deleteSchool} />
        ))}
      </div>
    </div>
  );
}

export default App;
