import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import GeneralInfoEdit from './components/GeneralInfoEdit';
import GeneralInfoPreview from './components/GeneralInfoPreview';
import EducationEdit from './components/EducationEdit';
import EducationPreview from './components/EducationPreview';

const ModeButton = styled.button`
  background: green;
  min-width: 100px;
  padding: 10px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  border-right: 1px solid white;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  &:hover {
    background: white;
    border: 2px solid green;
    color: green;
  }
`;

const PreviewButton = styled(ModeButton)`
  border-right: none;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-left: 1px solid white;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`;

const Document = styled.div`
  margin: 0 auto;
  max-width: 545px;
  min-height: 842px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 15px;
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

  const [educationInfos, setEducationInfos] = useState({
    school: 'School/University Name',
    gradDate: 'Graduation Year, if applicable',
    course: 'Course, if Tertiary Education',
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

    setEducationInfos({
      ...educationInfos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <ModeButton onClick={handleMode} value="edit">
        Edit
      </ModeButton>
      <PreviewButton onClick={handleMode} value="preview">
        Preview
      </PreviewButton>

      {mode ? (
        <div className="edit">
          <h1> You are in Edit Mode!</h1>
          <GeneralInfoEdit infos={infos} handleChange={handleChange} />
          <div>
            {' '}
            Education
            <EducationEdit
              educationInfos={educationInfos}
              handleChange={handleChange}
            />
          </div>
        </div>
      ) : (
        <div className="preview">
          <h1>You're in Preview Mode</h1>
          <Document>
            <GeneralInfoPreview infos={infos} />
            <EducationPreview educationInfos={educationInfos} />
          </Document>
        </div>
      )}
    </div>
  );
}

export default App;
