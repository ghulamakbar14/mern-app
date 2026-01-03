import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import UserForm from "./UserForm";
import { getUsers } from "./users.api";
import "./users.css";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  const loadUsers = async () => {
    const res = await getUsers(1);
    setUsers(res.data.users.map(u => ({ id: u._id, ...u })));
  };

  useEffect(() => { loadUsers(); }, []);

  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => console.log("Edit", params.row.id)}
        >
          Edit
        </Button>
      ),
      width: 100
    }
  ];

  return (
    <Box>
      <Typography variant="h4">Users</Typography>
      <Button variant="contained" sx={{ mb: 2 }} onClick={() => setOpen(true)}>
        Add User
      </Button>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={users} columns={columns} pageSize={5} />
      </div>
      <UserForm open={open} onClose={() => { setOpen(false); loadUsers(); }} />
    </Box>
  );
}
