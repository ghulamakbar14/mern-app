import { Button, TextField, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { signup } from "./auth.api";

export default function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await signup(data);
    window.location.href = "/";
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField fullWidth label="Name" {...register("name")} />
        <TextField fullWidth label="Email" {...register("email")} />
        <TextField fullWidth label="Password" type="password" {...register("password")} />
        <Button fullWidth type="submit">Signup</Button>
      </form>
    </Container>
  );
}
