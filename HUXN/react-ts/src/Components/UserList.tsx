import { useEffect, useState } from "react";

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UserList = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("error fetching", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      {users.length === 0 ? (
        <p>loading...</p>
      ) : (
        users.map((user) => (
          <div key={user.id} className="bg-amber-50 m-2">
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
