import axios from "axios";

export const listTodolist = async () => {
  return await axios.get("http://127.0.0.1:8000/api/todo");
};
export const readTodolist = async (id) => {
  return await axios.get(`http://127.0.0.1:8000/api/todos/${id}`);
};

export const createTodolist = async (data) => {
  return await axios.post("http://127.0.0.1:8000/api/createtodo", data);
};

export const deleteTodolist = async (id) => {
  return await axios.delete(`http://127.0.0.1:8000/api/deletetodo/${id}`);
};
