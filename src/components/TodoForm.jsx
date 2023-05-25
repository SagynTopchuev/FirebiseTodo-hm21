import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchRequestDelete } from "../store/actions/thunk";

export const TodoForm = () => {
  const { items } = useSelector((state) => state.reducer);

  const dispatch = useDispatch();

  const Delete = (id) => {
    dispatch(fetchRequestDelete(id));
  };
  return (
    <div>
      {items.map((el) => {
        return (
          <div key={el.id}>
            <h1>{el.title}</h1>
            <button onClick={() => Delete(el.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
