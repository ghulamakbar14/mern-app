import { useEffect, useState } from "react";
import { Button, Table, TableRow, TableCell } from "@mui/material";
import UserForm from "./UserForm";
import { getUsers } from "./users.api";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await getUsers(1);
    setUsers(res.data.users);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>Add User</Button>
      <Table>
        {users.map(u => (
          <TableRow key={u._id}>
            <TableCell>{u.name}</TableCell>
            <TableCell>{u.email}</TableCell>
          </TableRow>
        ))}
      </Table>
      <UserForm open={open} onClose={() => { setOpen(false); load(); }} />
    </>
  );
}
