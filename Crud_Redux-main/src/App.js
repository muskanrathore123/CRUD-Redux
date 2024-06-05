import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import Home from "./components/Home";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/delete/:id" element={<DeleteUser />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
