import React from 'react';
import { CiTextAlignCenter } from 'react-icons/ci';

const UserList = () => {
  const Styles = {
    color: "black",
    padding: "2rem",
    backgroundColor: "lightblue",
    textAlign: "center", // Centers text
    display: "flex", // Enables flexbox
    flexDirection: "column", // Stacks items vertically
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
    height: "100vh", // Full viewport height
  };

  const Users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 20 },
    { id: 3, name: 'Prince', age: 22 },
  ];

  return (
    <div style={Styles}>
      <CiTextAlignCenter size={50} /> {/* Displays the icon */}
      {Users.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h2>Age: {user.age}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserList;

