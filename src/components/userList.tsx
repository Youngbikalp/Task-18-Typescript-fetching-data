import React, { useState, useEffect } from "react";
import { IUsers } from "../types/types";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json(); // the data will now be the array of users

      setUsers([...data]);

      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>User Lists</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>
              Address: {user.address.city}, {user.address.zipcode}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
