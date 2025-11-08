export const getAllUsers = async () => {
  const response = await fetch(
    "https://playground.4geeks.com/todo/users?offset=0&limit=100",
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data.users;
  } else {
    const message = { error: response.statusText };
    console.log(message);
  }
};

export const getUserData = async (userName) => {
  const response = await fetch(
    `https://playground.4geeks.com/todo/users/${userName}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const message = { error: response.statusText };
    console.log(message);
  }
};

export const createUser = async (userName) => {
  const response = await fetch(
    `https://playground.4geeks.com/todo/users/${userName}`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    const message = { error: response.statusText };
    console.log(message);
  }
};

export const deleteUser = async (userName) => {
  const response = await fetch(
    `https://playground.4geeks.com/todo/users/${userName}`,
    {
      method: "DELETE",
      headers: {
        accept: "application/json",
      },
    }
  );
  console.log(userName);
  if (response.ok) {
    return true;
  } else {
    const message = { error: response.statusText };
    return false;
  }
};



