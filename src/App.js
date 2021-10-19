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
  //const firstID = uniqid();
  const [schools, setSchools] = useState([
    // {
    //   school: (
    //     <Education key={uniqid()} id={firstID} deleteSchool={deleteSchool} />
    //   ),
    //   id: firstID,
    // },
  ]);
  const addSchool = (e) => {
    const newID = uniqid();
    setSchools((prevState) =>
      prevState.concat({
        school: (
          <Education key={uniqid()} id={newID} deleteSchool={deleteSchool} />
        ),
        id: newID,
      })
    );
    e.preventDefault();
  };
  function deleteSchool(e) {
    const index = schools.findIndex((x) => x.id === e.target.id);
    setSchools((prevState) => prevState.splice(index, 1));
  }
  return (
    <div className="App">
      <GeneralInfo />
      <div>
        Education
        <Button variant="contained" onClick={addSchool}>
          Add
        </Button>
        {schools.map((element) => element.school)}
      </div>
    </div>
  );
}

export default App;
