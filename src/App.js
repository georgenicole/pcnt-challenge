import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Layout from "./components/Layout";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import ToDoList from "./components/ToDoList";

function App() {
  const [list, setList] = useState([{ title: "hola, ya esta listo", checked: true }]);

  return (
    <Layout>
      <Title />
      <Subtitle />
      <Input />
      <ToDoList data={list} />
    </Layout>
  );
}

export default App;
