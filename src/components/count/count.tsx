import { useEffect, useState } from "react";
import { useAppSelector } from "../..";
import { TTodo } from "../../store/todosSlice";
import styles from "./count.module.css";

const Count = () => {
  const todos = useAppSelector(state => state.data.todos);

  const [count, setCount] = useState<number>();

  const countLeftItems = (todo: TTodo[]) => {
    const doneTodoArr = todo.filter((item) => item.done === false);
    setCount(doneTodoArr.length)
  };

  useEffect(() => {
    countLeftItems(todos);
  }, [todos, count]);

  return (
    <>
      {todos.length !== 0 && <div className={styles.cont} data-testid="count">
        {count === 1 ? (<p className={styles.count}>{count} item left</p>) :
        (<p className={styles.count}>{count} items left</p>)}
      </div>}
    </>
  );
};

export default Count;
