import { useState, useEffect } from "react";
import { fetchUsers } from "./orders.api";

export default function UserList() {
    const [users, setUsers] = useState([]);

    const loadList = async () => {
        const res = await fetchUsers();
        console.log('data',res.data);
        setUsers(res.data);
    }

    useEffect(() => {
        loadList();
    }, []);

    return (
            <div>
      <h3>User List</h3>

      {users.length === 0 && <p>No users found</p>}

      <ul>
        {users.map(user => (
          <li key={user._id}>
            <strong>{user.name}</strong> — {user.email} — {user.role}
          </li>
        ))}
      </ul>
    </div>
    );
}