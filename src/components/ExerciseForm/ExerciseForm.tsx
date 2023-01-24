import React from "react";
import { TextField, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { auth } from "../../helpers/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

interface NameFormValues {
  name: string;
  surname: string;
}

const ExerciseForm = () => {
  const { register, handleSubmit } = useForm<NameFormValues>();

  const submitHandler = ({ name, surname }: NameFormValues) => {
    signInWithEmailAndPassword(auth, name, surname)
      .then(() => {
        console.log("Success");
      })
      .catch((err) => {
        console.log(`Failure, ${err.message}`);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          variant="outlined"
          type="text"
          placeholder="name"
          sx={{ display: "block", mx: "auto", my: ".5rem" }}
          {...register("name", { required: true })}
        ></TextField>
        <TextField
          variant="outlined"
          type="text"
          placeholder="surname"
          sx={{ display: "block", mx: "auto", my: ".5rem" }}
          {...register("surname", { required: true })}
        ></TextField>
        <Button
          variant="contained"
          type="submit"
          sx={{ display: "block", mx: "auto", mb: "1rem" }}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default ExerciseForm;
