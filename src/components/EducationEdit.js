import React from 'react';
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

export default function EducationEdit(props) {
  return (
    <div>
      <StyledForm>
        <TextField
          id="outlined-basic"
          label="School..."
          variant="outlined"
          name="school"
          value={props.educationInfos.school}
          onChange={props.handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Course..."
          variant="outlined"
          name="course"
          value={props.educationInfos.course}
          onChange={props.handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Graduation Year..."
          variant="outlined"
          name="gradDate"
          value={props.educationInfos.gradDate}
          onChange={props.handleChange}
        />
      </StyledForm>
    </div>
  );
}
