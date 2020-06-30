import React, { useState, useEffect} from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  console.log("Hi");
  const getUsers = async() => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    setUsers(users);
  }

  useEffect(() => {
    getUsers();

  }, []);

  return(
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
