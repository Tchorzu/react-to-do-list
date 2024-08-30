import { useState } from "react";
import styles from "./Form.module.css";
export function Form({ onFormSubmit, inputVal, onInputValChange, editTaksId }) {
  const [errorForm, setErrorForm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const task = inputVal;

    if (task !== "") {
      onFormSubmit(task, editTaksId);

      onInputValChange("");
      setErrorForm("");
    } else {
      setErrorForm("Nie wprwadzono zadania!");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="task"
          id="task"
          value={inputVal}
          onChange={(event) => onInputValChange(event.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          {editTaksId ? "Zapisz" : "Dodaj"}
        </button>
      </form>
      {errorForm && <p className={styles.error}>{errorForm}</p>}
    </>
  );
}
