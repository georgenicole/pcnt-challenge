
import "./App.css";
import Input from "./components/Input";
import Layout from "./components/Layout";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <Layout>
      <Title/>
      <Subtitle/>
      <Input/>
      <ToDoList/>
    </Layout>
  );
}

export default App;
