import "./App.css";
import UserInfo from "./Components/UserInfo";
import AdminInfo from "./Components/AdminInfo";
import { type Info, type AdminInfoType } from "./types";

function App() {
  const user: Info = {
    id: 1,
    name: "John Doe",
    email: "jphn@fsg.com",
  };
  const admin: AdminInfoType = {
    id: 2,
    name: "Jenny Doe",
    email: "jphnfsfsf@fsg.com",
    role: "Admin",
    lastLogin: new Date(),
  };
  return (
    <>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </>
  );
}

export default App;
