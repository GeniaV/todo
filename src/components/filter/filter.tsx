import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../..";
import styles from "./filter.module.css";
import { selectOption } from "../../store/filterSlice";

export const enum Buttons {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
};

const Filter = () => {
  const todos = useAppSelector(state => state.data.todos);

  const dispatch = useAppDispatch();

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

  useEffect(() => {
    dispatch(selectOption(activeButton));
  }, [activeButton, dispatch])

  return (
    <>
      {todos.length !== 0 && <div data-testid="filter" className={styles.filters}>
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
