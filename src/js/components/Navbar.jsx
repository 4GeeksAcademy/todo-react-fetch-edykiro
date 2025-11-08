import React from "react";
import { use } from "react";
import { useState, useEffect } from "react";
import {
  createUser,
  getAllUsers,
  getUserData,
  deleteUser,
} from "../userServices";

const Navbar = ({ userTasks, setUserTasks, user, createUserVariable }) => {
  const [inputValue, setInputValue] = useState("");

  const [users, setUsers] = useState([]);

  const [userBuffer, setUserBuffer] = useState("");

  const handleChange = async (event) => {
    const userName = event.target.value;
    createUserVariable(userName);
  };

  const createUserListFetch = async (userName) => {
    createUserVariable(userName);
    await createUser(userName);

    actualizarListaUsuarios();
  };

  const deleteUserFromListFetch = async (userName) => {
    const isDeleted = await deleteUser(userName);
    createUserVariable("");
    actualizarListaUsuarios();
  };

  const actualizarListaUsuarios = async () => {
    const listaUsuarios = await getAllUsers();
    setUsers(listaUsuarios);
  };

  useEffect(() => {
    actualizarListaUsuarios();
  }, []);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark shadow-sm px-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">

          <span className="navbar-brand fw-bold text-light mb-0">
            <i className="fa-solid fa-list-check me-2 text-info"></i>
            Todo-list
          </span>


          <div className="d-flex align-items-center gap-2">

            <div
              className="input-group input-group-sm"
              style={{ width: "220px" }}
            >
              <input
                onChange={({ target }) => setUserBuffer(target.value)}
                value={userBuffer}
                type="text"
                className="form-control form-control-lg fs-5"
                placeholder="New username"
              />
              <button
                onClick={() => {createUserListFetch(userBuffer);setUserBuffer("")}}
                className="btn btn-outline-success"
                title="Add user"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>

            {/* User selector */}
            <select
              onChange={handleChange}
              className="form-select form-select-lg"
              style={{ width: "160px" }}
            >
              <option value="" disabled selected>
                Select user
              </option>
              {users.map((u) => (
                <option key={u.name} value={u.name}>
                  {u.name}
                </option>
              ))}
            </select>

            {/* Delete user */}
            <button
              onClick={() => deleteUserFromListFetch(user)}
              className="btn btn-sm btn-outline-danger"
              title="Delete selected user"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
