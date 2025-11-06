export const getUserTodos = async () => {
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