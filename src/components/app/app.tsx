import { useState } from "react";
import TodoList from "../todo-list/todo-list";
import styles from "./app.module.css";
import { useAppDispatch } from "../..";
import { addTodo } from '../../store/todosSlice';
import { nanoid } from "nanoid";

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setInputValue(inputValue);
    dispatch(addTodo({text: inputValue, id: nanoid(), done: false}));
    setInputValue('');
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.app__header}>todos</h1>
      <div className={styles.app__canvas}>
        <div className={styles.app__canvas_lower}></div>
        <div className={styles.app__canvas_middle}></div>
        <div className={styles.app__canvas_upper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.form__input} value={inputValue} type="text" placeholder="What needs to be done?"
              onChange={(e) => setInputValue(e.target.value)} />
          </form>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
