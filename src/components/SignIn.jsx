import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dashboard from "./Dashboard";
import { Block, ImageRounded } from "@mui/icons-material";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="https://juniv.edu/">
        Seminar Library Automation System <br />
      </Link>{" "}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const [hidden, setHidden] = useState(false);
  const handleSubmit = (event) => {};
  const handleClick = () => {
    setHidden(true);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" hidden={hidden}>
        <Box
          sx={{
            m: 20,
            fontWeight: "medium",
            textAlign: "center",
            fontSize: "h4.fontSize",
            letterSpacing: 6,
            m: 1,
          }}
        >
          CSE Seminar Library Automation System
        </Box>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In as Librarian
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              sx={{ display: "block" }}
            />
            <RouterLink to="/dashboard">
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClick}
              >
                Sign In
              </Button>
            </RouterLink>
            <Grid container spacing={2}>
              <Grid item xs>
              <RouterLink to="/signup">
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleClick}
                  >
                    {"Forgot Password"}
                  </Button>
                </RouterLink>
              </Grid>
              <Grid item>
                <RouterLink to="/signup">
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleClick}
                  >
                    {"Sign Up as Student"}
                  </Button>
                </RouterLink>
              </Grid>
              <Grid item>
              <RouterLink to="/signupfaculty">
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleClick}
                  >
                    {"Sign Up as Faculty"}
                  </Button>
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
