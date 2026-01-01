import { useState } from "react";
import { createUser } from "./Service";

export default function UserForm({reload}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const submit = async() => {
        await createUser({name, email, password, role});

        setName('');
        setEmail('');
        setPassword('');
        setRole('');
        reload();
    }

    return (
        <>
            <input placeholder="User Name" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="User Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            <input placeholder="Role" value={role} onChange={e => setRole(e.target.value)}/>
            <button onClick={submit}>Add</button>
        </>
    );
}