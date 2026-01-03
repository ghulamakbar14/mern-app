import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { createUser } from "./users.api";

export default function UserForm({ open, onClose }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await createUser(data);
    onClose();
  };

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
