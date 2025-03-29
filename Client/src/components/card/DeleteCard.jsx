import { deleteTodolist } from "@/api/todolist";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { sweetAlert } from "@/utils/alert";
import useTodolistStore from "@/store/todolistStore";

const DeleteCard = ({ id }) => {
  const actionDeleteTodoList = useTodolistStore(
    (state) => state.actionDeleteTodoList
  );
  const hdlDelete = async (id) => {
    await deleteTodolist(id)
      .then((res) => {
        sweetAlert(res.data.message, "success");
        actionDeleteTodoList(id);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(id);
  };
  return (
    <div className=" absolute bottom-5 right-7">
      <Button className="cursor-pointer" onClick={() => hdlDelete(id)}>
        <Trash2 />
      </Button>
    </div>
  );
};

export default DeleteCard;
