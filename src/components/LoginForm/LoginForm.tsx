import React from "react";
import { TextField, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { auth } from "../../helpers/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  const logUserIn = ({ email, password }: LoginFormValues) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Success");
      })
      .catch((err) => {
        console.log(`Failure, ${err.message}`);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(logUserIn)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Typography align="center" variant="h2" sx={{ fontSize: "1.5rem" }}>
        Log into account
      </Typography>
      <TextField
        variant="outlined"
        type="email"
        placeholder="email"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
        {...register("email", { required: true })}
      ></TextField>
      <TextField
        variant="outlined"
        type="password"
        placeholder="password"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
        {...register("password", { required: true })}
      ></TextField>
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto", mb: "1rem" }}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
