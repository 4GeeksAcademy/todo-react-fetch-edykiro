import React from "react";
import { use } from "react";
import { useState } from "react";


const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-secondary">
        <div className="container">
          <a className="navbar-brand">Todo-list</a>
        </div>
        <div className="d-flex col-6">
          <div className="col-6 mx-3">
            <div className="input-group">
              <input
                onChange={({ target }) => createUserVariable(target.value)}
                type="text"
                className="form-control"
                placeholder="Username"
              />
              <button
                onClick={() => createUser(user)}
                className="btn btn-success mx-1"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <select
            onChange={handleChange}
            className="form-select"
            aria-label="Default select example"
          >
            <option defaultValue="0">Open this select menu </option>
            {users.map((user) => (
              <option value={user.name}>{user.name}</option>
            ))}
          </select>
          <button
            onClick={() => deleteUser(user)}
            className="btn btn-danger mx-1"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
