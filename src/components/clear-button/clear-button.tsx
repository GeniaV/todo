import { useAppSelector } from "../..";
import styles from "./clear-button.module.css";

const ClearButton = () => {
  const todos = useAppSelector(state => state.data.todos);

  return (
    <>
      {todos.length !== 0 && <button className={styles.button}>Clear Completed</button>}
    </>
  );
};

export default ClearButton;