export const createUserTask = async (userName, newTask) => {
  const response = await fetch(
    `https://playground.4geeks.com/todo/todos/${userName}`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        label: newTask,
        is_done: false
      })
      
    }
  );
  if (response.ok) {
    const data = await response.json();
    console.log("esta es la data" + data);
    return data;
  } else {
    const message = { error: response.statusText };
    console.log(message);
  }
};

export const deleteUserTask = async (deleteId) => {
  const response = await fetch(
    `https://playground.4geeks.com/todo/todos/${deleteId}`,
    {
      method: "DELETE",
      headers: {
        accept: "application/json"
      },
    }
  );
  if (response.ok) {
    const data = await response.text();
    console.log(data);
    return data;
  } else {
    const message = { error: response.statusText };
    console.log(message);
  }
};




