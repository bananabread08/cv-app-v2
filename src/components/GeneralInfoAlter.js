import React from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px black solid;
  padding: 20px;
`;
export default function GeneralInfoAlter() {
  return (
    <div>
      General Information
      <StyledForm>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Contact" variant="outlined" />
        <TextField id="outlined-basic" label="Site" variant="outlined" />
      </StyledForm>
    </div>
  );
}
