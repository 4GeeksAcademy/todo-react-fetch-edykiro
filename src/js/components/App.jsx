import React, { useEffect, useState } from "react";
import {
  createUser,
  getAllUsers,
  getUserData,
  deleteUser,
} from "../userServices";
import { use } from "react";

const App = ({ userTasks, setUserTasks, user, createUserVariable }) => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      //THIS WILL BE FOR ADDING THE TASKS

      console.log(user);
    }
  };

  const editArray = (index) => {
    const newTasks = userTasks.filter((task) => task !== tasks[index]);
    setUserTasks(newTasks);
  };

  const actualizarListaUsuarios = async () => {
    const listaUsuarios = await getAllUsers();
    setUsers(listaUsuarios);
  };

  const añadirTareaUsuario = async () => {};

  useEffect(() => {
    actualizarListaUsuarios();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <div className="col-12 col-sm-8 col-md-6 col-lg-5">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Type a task and press Enter"
              onChange={({ target }) => setInputValue(target.value)}
              value={inputValue}
              onKeyDown={handleKeyDown}
            />
          </div>

          <ul className="list-group">
            {userTasks?.length > 0 ? (
              userTasks?.map((task, index) => (
                <li className="list-group-item d-flex justify-content-between">
                  {task.label}{" "}
                  <button
                    onClick={() => editArray(index)}
                    className="btn-delete-task border-0 bg-white"
                    title="Eliminar tarea"
                  >
                    X
                  </button>
                </li>
              ))
            ) : (
              <li className="list-group-item text-center ">
                No tasks left, add one
              </li>
            )}
          </ul>
        </div>
      </div>
      <button className="button" onClick={() => {}}>
        Button Test
      </button>
    </>
  );
};

export default App;
