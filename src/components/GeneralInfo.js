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
export default function GeneralInfo(props) {
  const [infos, setInfos] = useState({
    name: 'Phoenix Wright',
    role: 'Defense Attorney',
    contact: '0912334555466',
    email: 'theaceattorney12@gmail.com',
    site: 'https://github.com/daphoenix12',
    editing: false,
  });

  const handleChange = (e) => {
    setInfos({
      ...infos, //save the current state of  all values
      [e.target.name]: e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  };

  const handleSubmit = (e) => {
    setInfos({
      ...infos,
      editing: !infos.editing,
    });
    e.preventDefault();
  };
  return (
    <div>
      {infos.editing ? (
        <Modal>
          <StyledForm onSubmit={handleSubmit}>
            General Information
            <TextField
              id="outlined-basic"
              label="Name"
              name="name"
              variant="outlined"
              value={infos.name}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Role"
              name="role"
              variant="outlined"
              value={infos.role}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              name="email"
              variant="outlined"
              value={infos.email}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Contact"
              name="contact"
              variant="outlined"
              value={infos.contact}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Site"
              name="site"
              variant="outlined"
              value={infos.site}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              {' '}
              Submit
            </Button>
          </StyledForm>
        </Modal>
      ) : (
        <section>
          <div>{infos.name}</div>
          <div>{infos.role}</div>
          <div>{infos.contact}</div>
          <div>{infos.email}</div>
          <div>{infos.site}</div>
          <Button variant="contained" onClick={handleSubmit}>
            {' '}
            Edit
          </Button>
        </section>
      )}
    </div>
  );
}
