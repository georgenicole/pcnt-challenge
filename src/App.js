import "./App.css";
import "./reset.css";
import { useState } from "react";
import Layout from "./components/Layout";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import ToDoList from "./components/ToDoList";
import FormTodo from "./components/FormToDo/index";
import { states } from "./utils";
import Modal from "./components/Modal";
import Button from "./components/Button";
const optionsDefault = [
  { name: "Todos", state: "all" },
  { name: "No Realizados", state: states.pending },
  { name: "Realizados", state: states.done },
];

function App() {
  const [list, setList] = useState([]);
  const [optionSelected, setOptionSelected] = useState(optionsDefault[0]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showMdal, setShowModal] = useState(false);
  const handleShowFilters = () => setShowTooltip((prev) => !prev);
  const handleAdd = (todo) => {
    setList((prev) => [...prev, todo]);
  };

  const handleCheck = (item) => {
    console.log(item);
    const valuesChecked = list.map((el) =>
      el.id === item.id
        ? {
            ...el,
            checked: !item.checked,
            state: !item.checked ? states.done : states.pending,
          }
        : el
    );
    setList(valuesChecked);
  };

  const handleFilter = (option) => {
    setOptionSelected(option);
    setShowTooltip(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleNewList = () => {
    handleCloseModal();
    setList([]);
  };

  return (
    <main>
      <Layout>
        {!list.length && <Title>To do list</Title>}
        {!list.length && <Subtitle />}
        <FormTodo onTodo={handleAdd} />
        {!!list.length && (
          <ToDoList
            data={list}
            options={optionsDefault}
            optionSelected={optionSelected}
            showTooltip={showTooltip}
            onCheck={handleCheck}
            onFilter={handleFilter}
            onShowFilter={handleShowFilters}
            onNewList={handleShowModal}
          />
        )}
      </Layout>
      <Modal handleClose={handleCloseModal} isOpen={showMdal}>
        <div>
          <h3>Empezar nueva lista</h3>
          <p className="modal-content-warning">
            Cuando comenzás una nueva lista, tu lista existente se elimina.
            ¿Estás seguro que querés empezar una nueva lista?
          </p>
        </div>
        <div className="row buttons-modal">
          <Button
            title="Cancelar"
            tenant="secondary"
            onClick={handleCloseModal}
          />
          <Button title="Nueva Lista" onClick={handleNewList} />
        </div>
      </Modal>
    </main>
  );
}

export default App;