import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import App from "./App";

//create your first component
const Home = () => {
	const [userTasks, setUserTasks] = useState([]);
	const [user, createUserVariable] = useState("");

	return (
		<>
		<Navbar userTasks={userTasks} setUserTasks={setUserTasks} user={user} createUserVariable={createUserVariable}/>
		<App userTasks={userTasks} setUserTasks={setUserTasks} user={user} createUserVariable={createUserVariable}/>
		</>
	);
};

export default Home;