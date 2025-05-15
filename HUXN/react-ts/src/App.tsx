import "./App.css";

import { type Info, type AdminInfoType } from "./types";
import UserList from "./Components/UserList";

function App() {
  return (
    <>
      {/* <UserInfo user={user} />
      <AdminInfo admin={admin} /> */}
      <UserList />
    </>
  );
}

export default App;
