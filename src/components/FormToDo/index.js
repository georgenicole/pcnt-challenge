import './styles.css'
import { useState } from "react";
import { createTodo } from '../../utils';


function FormTodo({onTodo}) {
  const [value, setValue] = useState("");
  const handleChange = (el) => {
    setValue(el.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const todo = createTodo(value)
    onTodo(todo)
    setValue('')
  };
  return (
    <form onSubmit={handleAdd}>
      <input
        placeholder="Escribí un item"
        name="todo"
        value={value}
        onChange={handleChange}
        className="item-input"
      />
      <input type="submit" value="Agregar" className="btn btn-add submit" disabled={!value.length}/>
    </form>
  );
}

export default FormTodo