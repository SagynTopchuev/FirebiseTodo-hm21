import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRequestGet, fetchRequestPost } from "../store/actions/thunk";
import { TodoForm } from "./TodoForm";

export const TodoList = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onsubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      title: value,
      completed: false,
      edit: false,
    };
    setValue("");
    dispatch(fetchRequestPost(data));
  };

  useEffect(() => {
    dispatch(fetchRequestGet());
  }, [dispatch]);

  return (
    <div>
      <form onSubmit={onsubmitHandler}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add</button>
      </form>
      <TodoForm />
    </div>
  );
};
