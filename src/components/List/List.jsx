import styles from "./List.module.css";
import { Item } from "../Item/Item.jsx";

export function List({ listOfTasks, onDeleteClick, onDoneClick, onEditClick }) {
  return (
    <ul className={styles.list}>
      {listOfTasks.map((t) => (
        <Item
          key={t.id}
          task={t.task}
          isDone={t.isDone}
          onDeleteClick={() => onDeleteClick(t.id)}
          onDoneClick={() => onDoneClick(t.id)}
          onEditClick={() => onEditClick(t.id)}
        />
      ))}
    </ul>
  );
}
