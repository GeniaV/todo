import { useAppDispatch, useAppSelector } from "../..";
import { deleteCompleted } from "../../store/todosSlice";
import styles from "./clear-button.module.css";

const ClearButton = () => {
  const todos = useAppSelector(state => state.data.todos);
  const unfinished = todos.filter((item) => item.done === false);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(deleteCompleted(unfinished));
  };

  return (
    <>
      {todos.length !== 0 && <button className={styles.button} onClick={handleButtonClick}>Clear Completed</button>}
    </>
  );
};

export default ClearButton;