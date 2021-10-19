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
  background-color: #fefefe;
  border: 1px solid #888;
`;

const Modal = styled.div`
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export default function Education(props) {
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
        <Modal>
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
        </Modal>
      ) : (
        <div>
          <div>{educationInfos.school}</div>
          <div>{educationInfos.course}</div>
          <div>{educationInfos.gradDate}</div>
          <Button variant="contained" onClick={handleSubmit}>
            {' '}
            Edit
          </Button>
          <Button
            variant="contained"
            onClick={props.deleteSchool}
            id={props.id}
          >
            {' '}
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}
