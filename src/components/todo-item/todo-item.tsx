import { useAppDispatch } from "../..";
import { TTodo, complete, editTodo } from "../../store/todosSlice";
import styles from "./todo-item.module.css";

const TodoItem: React.FunctionComponent<TTodo> = (item: TTodo) => {
  const dispatch = useAppDispatch();

  const hadleCheckedChange = (item: TTodo) => {
    dispatch(complete(item));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, item: TTodo) => {
    if (item.done === false) {
      dispatch(editTodo({ ...item, text: event.target.value }));
    }
  };

  return (
    <li className={styles.list__item} key={item.id}>
      <input type="checkbox" name='checkbox' id={item.id} onChange={() => hadleCheckedChange(item)} />
      <label htmlFor={item.id} className={styles.list__item__check}>
        <input type="text" value={item.text} className={!item.done
          ? styles.list__item__text : `${styles.list__item__text} ${styles.list__item__text_done}`} onChange={(e) => handleChange(e, item)} />
      </label>
    </li>
  );
};

export default TodoItem;