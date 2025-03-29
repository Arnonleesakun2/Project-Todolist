import { listTodolist } from "@/api/todolist";
import { create } from "zustand";

const todolistStore = (set, get) => ({
  todolists: [],
  actionListTodolist: async () => {
    try {
      const res = await listTodolist();
      set({
        todolists: res.data.result,
      });
    } catch (error) {
      console.log(error);
    }
  },
  actionDeleteTodoList: async (id) =>
    set((state) => ({
      todolists: state.todolists.filter((item) => item.id !== id), // ลบรายการที่มี id ตรงกับที่กำหนด
    })),
});

const useTodolistStore = create(todolistStore);
export default useTodolistStore;
