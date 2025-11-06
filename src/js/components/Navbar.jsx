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
  const [tasks, setTasks] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const [users, setUsers] = useState([]);

  const handleChange = async (event) => {
    const userName = event.target.value;
    createUserVariable(userName);
    console.log(userName);
    updateUserTasks();
  };

  const updateUserTasks = async () => {
    const fetchData = await getUserData(user);
    setUserTasks(fetchData.todos);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      console.log(user);
    }
  };

  const editArray = (index) => {
    const newTasks = userTasks.filter((task) => task !== tasks[index]);
    setUserTasks(newTasks);
  };

  const createUserListFetch = async (userName) => {
    await createUser(userName);
    actualizarListaUsuarios();
  };

  const deleteUserFromListFetch = async (userName) => {
    const isDeleted = await deleteUser(userName);
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
      <nav className="navbar bg-success">
        <div className="d-flex justify-content-between bg-danger w-100">
          <div>
            <a className="navbar-brand">Todo-list</a>
          </div>

          <div className="d-flex">
            <div className="input-group">
              <input
                onChange={({ target }) => createUserVariable(target.value)}
                type="text"
                className="form-control"
                placeholder="Username"
              />
              <button
                onClick={() => createUserListFetch(user)}
                className="btn btn-success mx-1"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>

            <select
              onChange={handleChange}
              className="form-select w-75"
              aria-label="Default select example"
            >
              <option defaultValue="0">Open this select menu </option>
              {users.map((user) => (
                <option value={user.name}>{user.name}</option>
              ))}
            </select>

            <button
              onClick={() => deleteUserFromListFetch(user)}
              className="btn btn-danger mx-1"
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
