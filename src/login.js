import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Divider,
  Typography
} from "@material-ui/core";

export const Login = ({ login, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    console.log(email, password);
    e.preventDefault();
    return login({ email, password });
  };
  return (
    <Paper style={{ width: "400px", padding: "30px", margin: "0 auto" }}>
      <form onSubmit={onSubmit}>
        <TextField
          id="email"
          label="Email"
          onChange={e => setEmail(e.target.value)}
          fullWidth
          variant="outlined"
          value={email}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          style={{ marginTop: "10px" }}
          onChange={e => setPassword(e.target.value)}
          fullWidth
          variant="outlined"
          value={password}
        />
        <button type="submit" label="Submit">
          Submit
        </button>
      </form>
      <Divider />
      <Typography style={{ margin: "10px auto" }}>Forgot password?</Typography>
    </Paper>
  );
};
