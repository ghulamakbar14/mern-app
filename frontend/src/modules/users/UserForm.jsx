import { Dialog, TextField, Button } from "@mui/material";
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
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 20 }}>
        <TextField label="Name" {...register("name")} fullWidth />
        <TextField label="Email" {...register("email")} fullWidth />
        <Button type="submit">Save</Button>
      </form>
    </Dialog>
  );
}
