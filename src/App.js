import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Layout from "./components/Layout";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import ToDoList from "./components/ToDoList";

function App() {
  const [list, setList] = useState([{ title: "hola, ya esta listo", checked: false }]);

  return (
    <Layout>
      <Title />
      <Subtitle />
      <Input />
      <ToDoList data={list} />
      <Button/>
    </Layout>
  );
}

export default App;
