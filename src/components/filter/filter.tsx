import { useState } from "react";
import { useAppSelector } from "../..";
import styles from "./filter.module.css";

const enum Buttons {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}

const Filter = () => {
  const todos = useAppSelector(state => state.todos);

  const [activeButton, setActiveButton] = useState(Buttons.All);

  function showActiveTodos() {
    setActiveButton(Buttons.Active);
  };

  function showCompletedTodos() {
    setActiveButton(Buttons.Completed);
  };

  function showAllTodos() {
    setActiveButton(Buttons.All);
  };


  return (
    <>
      {todos.length !== 0 && <div className={styles.filters}>
        <button className={activeButton === Buttons.All ? styles.button_active : styles.button} onClick={showAllTodos}>
          {Buttons.All}
        </button>
        <button className={activeButton === Buttons.Active ? styles.button_active : styles.button} onClick={showActiveTodos}>
          {Buttons.Active}
        </button>
        <button className={activeButton === Buttons.Completed ? styles.button_active : styles.button} onClick={showCompletedTodos}>
          {Buttons.Completed}
        </button>
      </div>}
    </>
  );
};

export default Filter;
