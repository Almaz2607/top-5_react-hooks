import axios from "axios";
import React from "react";
import useRequest from "../hooks/useRequest";

const Request = () => {
  const [todos, loading, error] = useRequest(fetchTodos);

  function fetchTodos() {
    return axios.get("https://jsonplaceholder.typicode.com/todos/");
  }

  if (loading) {
    return <h2>Идет загрузка ...</h2>;
  }

  if (error) {
    return <h2>Произошла ошибка при загрузке данных</h2>;
  }

  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <div
            key={todo.id}
            style={{ padding: 20, border: "1px solid orange", marginTop: 10 }}
          >
            {todo.id}. {todo.title}
          </div>
        ))}
    </div>
  );
};

export default Request;
