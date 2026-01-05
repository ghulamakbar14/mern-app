import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { createUser, updateUser } from "./users.api";
import { useEffect } from "react";

export default function UserForm({ open, onClose, user }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (user) {
      await updateUser(user.id, data);
    } else {
      await createUser(data);
    }
    onClose();
  };

  useEffect(() => {
    if (user) {
      // populate form with user data
      for (const key in user) {
        if (key !== "id") {
          register(key).onChange({ target: { value: user[key] } });
        }
      }
    }
  }, [user, register]);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add / Edit User</DialogTitle>
      <DialogContent>
        <TextField label="Name" {...register("name")} fullWidth />
        <TextField label="Email" {...register("email")} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
