import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px black solid;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export default function Education() {
  const [educationInfos, setEducationInfos] = useState({
    school: 'UP Diliman',
    course: 'Information Technology',
    gradDate: '2016',
    editing: false,
  });

  const handleChange = (e) => {
    setEducationInfos({
      ...educationInfos, //save the current state of  all values
      [e.target.name]: e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  };

  const handleSubmit = (e) => {
    setEducationInfos({
      ...educationInfos,
      editing: !educationInfos.editing,
    });
    e.preventDefault();
  };
  return (
    <div>
      {educationInfos.editing ? (
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="School..."
            variant="outlined"
            name="school"
            value={educationInfos.school}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Course..."
            variant="outlined"
            name="course"
            value={educationInfos.course}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Graduation Year..."
            variant="outlined"
            name="gradDate"
            value={educationInfos.gradDate}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            {' '}
            Submit
          </Button>
        </StyledForm>
      ) : (
        <div>
          <div>{educationInfos.school}</div>
          <div>{educationInfos.course}</div>
          <div>{educationInfos.gradDate}</div>
          <Button variant="contained" onClick={handleSubmit}>
            {' '}
            Edit
          </Button>
        </div>
      )}
    </div>
  );
}
