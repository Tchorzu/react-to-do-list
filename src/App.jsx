import { Header } from "./components/Header/Header.jsx";
import { Form } from "./components/Form/Form.jsx";
import { List } from "./components/List/List.jsx";
import styles from "./App.module.css";
import { useState } from "react";

const myList = [
  { id: 1, task: "Zapłacić rachunki", isDone: false },
  { id: 2, task: "Wyrzucić śmieci", isDone: true },
];

export function App() {
  const [isFormShow, setIsFormShow] = useState(false);
  const [listOfTasks, setListOfTasks] = useState(myList);
  const [inputValue, setInputValue] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);

  function handleShowFormClick() {
    setIsFormShow((prevState) => !prevState);
  }

  function handleFormSubmit(taskName, id) {
    if (id) {
      setListOfTasks(
        listOfTasks.map((task) => {
          if (task.id === id) {
            return { ...task, task: taskName };
          } else {
            return { ...task };
          }
        }),
      );

      setEditTaskId(null);
    } else {
      setListOfTasks((prevState) => {
        return [
          ...prevState,
          {
            id: prevState.length > 0 ? prevState.at(-1).id + 1 : 0,
            task: taskName,
            isDone: false,
          },
        ];
      });
    }

    setIsFormShow((prevState) => !prevState);
  }

  function handleDeleteTaskClick(id) {
    setListOfTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  function handleDoneTaskClick(id) {
    setListOfTasks(
      listOfTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        } else {
          return { ...task };
        }
      }),
    );
  }

  function handelEditTaskClick(id) {
    const editItem = listOfTasks.filter((task) => task.id === id);

    setInputValue(editItem[0].task);
    setEditTaskId(id);

    setIsFormShow(true);
  }

  return (
    <div className={styles.container}>
      <Header
        taskCount={listOfTasks.length}
        isFormShow={isFormShow}
        onAddButtonHeaderClick={handleShowFormClick}
      />
      {isFormShow && (
        <Form
          onFormSubmit={handleFormSubmit}
          inputVal={inputValue}
          onInputValChange={setInputValue}
          editTaksId={editTaskId}
        />
      )}
      {listOfTasks.length > 0 ? (
        <List
          listOfTasks={listOfTasks}
          onDeleteClick={handleDeleteTaskClick}
          onDoneClick={handleDoneTaskClick}
          onEditClick={handelEditTaskClick}
        />
      ) : null}
    </div>
  );
}
