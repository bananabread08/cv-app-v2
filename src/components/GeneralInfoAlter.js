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
export default function GeneralInfoAlter(props) {
  return (
    <div>
      General Information
      <StyledForm onSubmit={props.handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          name="name"
          variant="outlined"
          value={props.infos.name}
          onChange={props.handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Role"
          name="role"
          variant="outlined"
          value={props.infos.role}
          onChange={props.handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          value={props.infos.email}
          onChange={props.handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Contact"
          name="contact"
          variant="outlined"
          value={props.infos.contact}
          onChange={props.handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Site"
          name="site"
          variant="outlined"
          value={props.infos.site}
          onChange={props.handleChange}
        />
        <input className="Submit-btn" type="submit" value="Submit" />
      </StyledForm>
    </div>
  );
}
