import './App.css';
import React, { useEffect, useState } from "react";
import {
  createUser,
  getAllUsers,
  getUserData,
  deleteUser,
} from "../userServices";
import { use } from "react";
import { createUserTask, deleteUserTask } from "../todoServices";


const App = ({ userTasks, setUserTasks, user, createUserVariable }) => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);

  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      //THIS WILL BE FOR ADDING THE TASKS
      await createUserTask(user, inputValue);
      setInputValue("");
    }
    updateUserTasks();
  };

  const editArray = (index) => {
    const newTasks = userTasks.filter((task) => task !== tasks[index]);
    setUserTasks(newTasks);
  };

  const eliminarTareaUsuario = async (index) => {
    await deleteUserTask(index);
    updateUserTasks();
  };

  const actualizarListaUsuarios = async () => {
    const listaUsuarios = await getAllUsers();
    setUsers(listaUsuarios);
  };

  useEffect(() => {
    updateUserTasks();
  }, []);

  useEffect(() => {
    updateUserTasks();
  }, [user]);

  const updateUserTasks = async () => {
    const fetchData = await getUserData(user);
    if (fetchData.todos) {
      setUserTasks(fetchData.todos);
    } else {
      setUserTasks([]);
    }
  };

  return (
    <>
     <div
  className="d-flex justify-content-center mt-5"
  style={{

  }}
>
  <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
    {/* --- Input card --- */}
    <div className="card border-0 shadow-lg mb-4 bg-white">
      <div className="card-body p-3">
        <div className="input-group input-group-lg">
          <span className="input-group-text bg-white border-end-0">
            <i className="fa-solid fa-plus text-primary"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0 border-end-0"
            placeholder={
              user ? 'Add a new task and hit Enter' : 'Pick a user first'
            }
            onChange={({ target }) => setInputValue(target.value)}
            value={inputValue}
            onKeyDown={handleKeyDown}
            disabled={!user}
          />
          
        </div>
      </div>
    </div>

    {/* --- Tasks list --- */}
    <div className="card border-0 shadow-lg bg-white">
      <ul className="list-group list-group-flush">
        {userTasks?.length ? (
          userTasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between align-items-center py-3 px-4"
            >
              <span className="mb-0 fw-light text-dark">{task.label}</span>
              <button
                onClick={() => eliminarTareaUsuario(task.id)}
                className="btn btn-sm btn-outline-danger border-0 rounded-circle"
                title="Delete task"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </li>
          ))
        ) : (
          <li className="list-group-item text-center py-5 text-muted bg-light">
            <div className="small">No tasks yet—add one above</div>
          </li>
        )}
      </ul>
    </div>
  </div>
</div>
    </>
  );
};

export default App;
