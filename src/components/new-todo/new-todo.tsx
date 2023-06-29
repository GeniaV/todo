import { useState } from "react";
import styles from "./new-todo.module.css";
import { useAppDispatch } from "../..";
import { nanoid } from "nanoid";
import { addTodo } from "../../store/todosSlice";

const NewTodo = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setInputValue(inputValue);
    dispatch(addTodo({ text: inputValue, id: nanoid(), done: false }));
    setInputValue('');
  };

  return (
    <form className={styles.form} name="form" onSubmit={handleSubmit}>
      <div className={styles.form__dropdown}></div>
      <input className={styles.form__input} value={inputValue} type="text" placeholder="What needs to be done?"
        onChange={(e) => setInputValue(e.target.value)} />
    </form>
  );
};

export default NewTodo;


