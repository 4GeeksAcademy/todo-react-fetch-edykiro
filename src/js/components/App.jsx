import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setTasks((previous) => [...previous, inputValue.trim()]);
      setInputValue("");
    }
  };

  const editArray = (index) => {
    const newTasks = tasks.filter((task) =>  task !== tasks[index]);
    setTasks(newTasks);


  };

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
            {tasks.length > 0 ? tasks.map((task,index) => (
              <li className="list-group-item d-flex justify-content-between">
                {task}{" "}
                <button onClick={()=>editArray(index)}
                  className="btn-delete-task border-0 bg-white"
                  title="Eliminar tarea"
                >
                  X
                </button>
              </li>
            )) 
          : 
          <li className="list-group-item text-center ">No tasks left, add one</li>
          }

          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
