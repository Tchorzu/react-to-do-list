import styles from "./Item.module.css";

export function Item({
  task,
  isDone,
  onDeleteClick,
  onDoneClick,
  onEditClick,
}) {
  return (
    <li className={styles.item}>
      <span className={styles.taskName}>{isDone ? <s>{task}</s> : task}</span>
      {!isDone && (
        <>
          <button className={styles.button} onClick={onDoneClick}>
            Zrobione
          </button>
          <button className={styles.button} onClick={onEditClick}>
            Edytuj
          </button>
        </>
      )}
      <button className={styles.button} onClick={onDeleteClick}>
        Usuń
      </button>
    </li>
  );
}
