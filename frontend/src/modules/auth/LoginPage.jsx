import { Button, TextField, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { login } from "../../auth/auth.api";
import { setToken } from "../../services/authStorage";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const res = await login(data);
    setToken(res.data.token);
    window.location.href = "/dashboard/users";
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField fullWidth label="Email" {...register("email")} margin="normal"/>
        <TextField fullWidth label="Password" type="password" {...register("password")} />
        <Button fullWidth type="submit" variant="contained">Login</Button>
      </form>
    </Container>
  );
}

export default LoginPage;
