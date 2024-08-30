import { numberTaskSubheading } from "../../utils/numberTaskSubheading.js";
import styles from "./Header.module.css";

export function Header({ taskCount, isFormShow, onAddButtonHeaderClick }) {
  return (
    <header className={styles.header}>
      <div>
        <h1>Do zrobienia</h1>
        <h2>{numberTaskSubheading(taskCount)}</h2>
      </div>
      {!isFormShow && (
        <button className={styles.button} onClick={onAddButtonHeaderClick}>
          +
        </button>
      )}
    </header>
  );
}
