import React, { useEffect, useState } from "react";
import { createUser, getAllUsers, getUserData, deleteUser } from "../services";
import { use } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [userTasks, setUserTasks] = useState([]);
  const [user, createUserVariable] = useState("");

  const handleChange = async (event) => {
    const userName = event.target.value;
    const fetchData = await getUserData(userName);
    createUserVariable(userName);
    setUserTasks(fetchData.todos);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      //THIS WILL BE FOR ADDING THE TASKS

      console.log(users);
    }
  };

  const editArray = (index) => {
    const newTasks = tasks.filter((task) => task !== tasks[index]);
  };

  useEffect(() => {
    getAllUsers(setUsers);
    setInputValue("");
  }, [users]);

  useEffect(() => {
    getAllUsers(setUsers);
    setInputValue("");
  },[]);

  console.log(user);

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
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <li className="list-group-item d-flex justify-content-between">
                  {task}{" "}
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

 
      <div>
        <ul>
          {userTasks.map((element) => (
            <li>{element.label}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
