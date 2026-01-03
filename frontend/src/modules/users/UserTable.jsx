import  {useEffect, useState} from 'react';
import {fetchUsers} from './users.api';

export default function UserTable() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const loadUsers = async (page) => {
        const res = await fetchUsers(page);
        setUsers(res.data.users);
        setTotalPages(res.data.totalPages);
    };

    useEffect(() => {
        loadUsers(page);
    }, [page]);

    return (
        <>
            <h3>User Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <span> Page {page} of {totalPages} </span>
                <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
            </div>
        </>
    );
}