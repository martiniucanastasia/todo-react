import "./App.css";
import { ChangeEvent, FormEvent, useState } from "react";

import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";

type ToDoType = {
  id: number;
  name: string;
  completed: boolean;
};

function App() {
  const [todo, setToDo] = useState<string>("");
  const [toDoList, setToDoList] = useState<ToDoType[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value);
  };

  const handleListChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    const newToDo: ToDoType = {
      id: toDoList.length + 1,
      name: todo,
      completed: false,
    };
    setToDoList((prev) => [...prev, newToDo]);
    setToDo("");
  };

  const handleDelete = (id: ToDoType["id"]) => {
    const newArr = toDoList.filter((item) => item.id !== id);
    setToDoList(newArr);
  };

  const handleDoubleClick = (id: ToDoType["id"]) => {
    const updatedToDos = toDoList.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setToDoList(updatedToDos);
  };

  return (
    <>
      <h2>ToDo</h2>
      <form style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Input onChange={handleChange} value={todo} />
        <Button onClick={handleListChange}>Add</Button>
      </form>
      <ul>
        {toDoList &&
          toDoList.map((item: ToDoType) => {
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <li
                  onDoubleClick={() => handleDoubleClick(item.id)}
                  style={{ color: item.completed === true ? "green" : "" }}
                >
                  {item.name} - {item.completed.toString()}
                </li>
                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
              </div>
            );
          })}
      </ul>
    </>
  );
}

export default App;
