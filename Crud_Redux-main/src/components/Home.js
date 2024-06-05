import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>User CRUD App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/add">Add User</Link>
          </li>
          <li>
            <Link to="/users">User List</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
