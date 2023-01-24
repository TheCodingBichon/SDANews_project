import React from "react";
import { useForm } from "react-hook-form";
import { Button, Card, Typography } from "@mui/material";
import { getStorage } from "firebase/storage";
import { auth } from "../../helpers/firebaseConfig";

interface ProfilePhotoFormData {
  profilePhoto: FileList;
}

const ProfilePhotoForm = () => {
  const { register, handleSubmit } = useForm<ProfilePhotoFormData>();

  const uploadPhoto = (data: ProfilePhotoFormData) => {
    const photo = data.profilePhoto[0];

    if (auth.currentUser) {
    }
  };

  return (
    <form onSubmit={handleSubmit(uploadPhoto)}>
      <Card sx={{ p: "1rem" }}>
        <Typography variant="h6" align="center" sx={{ fontSize: "1rem" }}>
          Upload your profile picture
        </Typography>
        <Button
          variant="contained"
          component="label"
          sx={{
            display: "block",
            mx: "auto",
            my: "1rem",
            alignContent: "center",
          }}
        >
          <Typography variant="h6" align="center" sx={{ fonstSize: "1rem" }}>
            Select a file
          </Typography>
          <input
            type="file"
            hidden
            {...register("profilePhoto", { required: true })}
          />
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{ display: "block", mx: "auto" }}
        >
          Submit
        </Button>
      </Card>
    </form>
  );
};

export default ProfilePhotoForm;
