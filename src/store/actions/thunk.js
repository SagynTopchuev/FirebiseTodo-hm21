import { fetchRequest } from "../../lib/fetchAPI";

export const fetchRequestGet = () => {
  return async (dispatch) => {
    const BASE_URL = "https://todo-73628-default-rtdb.firebaseio.com/todos";

    try {
      const response = await fetch(`${BASE_URL}.json`);

      const data = await response.json();

      const result = [];

      for (const key in data) {
        result.push({
          id: key,
          title: data[key].title,
          completed: data[key].completed,
          edit: data[key].edit,
        });
      }

      dispatch({ type: "GET", payload: result });
    } catch (error) {
      new Error(error);
    }
  };
};

export const fetchRequestPost = (data) => {
  return async (dispatch) => {
    try {
      await fetchRequest("todos", {
        method: "POST",
        body: data,
      });

      // dispatch({ type: "POST", payload: data });
      dispatch(fetchRequestGet());
    } catch (error) {
      new Error(error);
    }
  };
};

export const fetchRequestDelete = (id) => {
  return async (dispatch) => {
    try {
      await fetchRequest(`todos/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "DELETE", payload: id });
      dispatch(fetchRequestGet());
    } catch (error) {
      new Error(error);
    }
  };
};
