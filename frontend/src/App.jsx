import UserList from "./modules/user/List";
import UserForm from "./modules/user/Form";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>MERN User Management</h1>
      <UserForm />
      <hr />
      <UserList />
    </div>
  );
}