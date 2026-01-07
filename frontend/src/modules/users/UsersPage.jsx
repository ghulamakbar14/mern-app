import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import UserForm from "./UserForm";
import { getUsers } from "./users.api";
import "./users.css";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [total, setTotal] = useState(0);

   const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  const loadUsers = async (page, pageSize) => {
    const res = await getUsers(page + 1, pageSize);
    setUsers(res.data.users.map(u => ({ id: u._id, ...u })));
    setTotal(res.data.total);
  };

  useEffect(() => {
    loadUsers(paginationModel.page, paginationModel.pageSize);
  }, [paginationModel]);

  const handleAdd = () => {
    setSelectedUser(null);
    setOpen(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

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
          onClick={(e) => {
            e.stopPropagation();
            handleEdit(params.row);
          }}
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
      <Button variant="contained" sx={{ mb: 2 }} onClick={handleAdd}>
        Add User
      </Button>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={users} columns={columns} pageSizeOptions={[5, 10, 20, 50, 100]} disableRowSelectionOnClick
          paginationModel={paginationModel}
          paginationMode="server"
          rowCount={total}
          onPaginationModelChange={setPaginationModel}
        />
      </div>
      <UserForm open={open} onClose={() => { setOpen(false); loadUsers(); }} user={selectedUser} />
    </Box>
  );
}
