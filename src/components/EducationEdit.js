import React, { useState } from 'react';
import { TextField } from '@mui/material';
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

export default function ExperienceEdit() {
  const [educationInfos, setEducationInfos] = useState({
    school: 'School/University Name',
    gradDate: 'Graduation Year, if applicable',
    course: 'Course, if Tertiary Education',
  });
  const handleChange = (e) => {
    setEducationInfos({
      ...educationInfos, //save the current state of  all values
      [e.target.name]: e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  };

  return (
    <div>
      <StyledForm>
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
      </StyledForm>
    </div>
  );
}
