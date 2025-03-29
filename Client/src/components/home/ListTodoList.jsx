import useTodolistStore from "@/store/todolistStore";
import Todocard from "../card/Todocard";
import { useEffect } from "react";
const ListTodoList = () => {
  const todolist = useTodolistStore((state) => state.todolists);
  return (
    <section className="grid grid-cols-4 gap-6 my-10">
      {todolist.map((item, index) => {
        return (
          <Todocard
            key={index}
            item={item}
          />
        );
      })}
    </section>
  );
};

export default ListTodoList;
