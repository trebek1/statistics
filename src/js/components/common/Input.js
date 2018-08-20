import React from "react";
import {Input, Grid} from '@material-ui/core'


const CustomInput = ({ label, text, type, id, value, handleChange }) => (
  <Grid container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}>
    <Grid item xs={3}>
      <label htmlFor={label}>{text}</label>
      </Grid>
      <Grid item xs={3}>
      <Input
        type={type}
        className="form-control"
        id={id}
        value={value}
        onChange={handleChange}
        required
      />
      </Grid>

  </Grid>
);

export default CustomInput;
