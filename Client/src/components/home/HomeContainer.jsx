import useTodolistStore from "@/store/todolistStore";
import { useEffect } from "react";
import ListTodoList from "./ListTodoList";

const HomeContainer = () => {
  const actionListTodolist = useTodolistStore(
    (state) => state.actionListTodolist
  );
  useEffect(() => {
    actionListTodolist();
  }, []);
  return <section className="my-10">
    <h2 className="text-2xl font-extrabold">Todolist</h2>
    <ListTodoList/>
  </section>;
};

export default HomeContainer;
