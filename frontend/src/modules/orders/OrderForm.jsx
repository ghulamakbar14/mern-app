import { useState } from "react";
import { signup } from "./authService";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const submit = async () => {
    await signup(form);
    alert("Signup successful");
  };

  return (
    <>
      <h2>Signup</h2>
      {Object.keys(form).map(key => (
        <input
          key={key}
          placeholder={key}
          type={key === "password" ? "password" : "text"}
          onChange={e => setForm({ ...form, [key]: e.target.value })}
        />
      ))}
      <button onClick={submit}>Register</button>
    </>
  );
}
