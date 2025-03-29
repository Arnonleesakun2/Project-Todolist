import FormInput from "../form/FormInput";
import FormTextArea from "../form/FormTextArea";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../utils/schema";
import FormPickDate from "../form/FormPickDate";
import { createTodolist } from "@/api/todolist";
import { RotateCw } from "lucide-react";
import { sweetAlert } from "@/utils/alert";

const TodolistContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const hdlsubmit = async (data) => {
    await new Promise((resoLve) => setTimeout(resoLve, 1500));
    await createTodolist(data)
      .then((res) => {
        reset();
        sweetAlert(res.data.message, "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="my-10">
      <h2 className="text-2xl font-extrabold">CreateTodolist</h2>
      <div className="my-10">
        <form onSubmit={handleSubmit(hdlsubmit)}>
          <div className="grid grid-cols-2 gap-3">
            <FormInput
              name="title"
              type="text"
              register={register}
              errors={errors}
            />
            <FormPickDate
              name="time"
              register={register}
              errors={errors}
              setValue={setValue}
            />
            <FormTextArea
              name="description"
              register={register}
              errors={errors}
            />
          </div>
          <div className="my-6 flex justify-center">
            <Button type="submit" variant="outline">
              {isSubmitting ? (
                <>
                  <RotateCw className="animate-spin" />
                  <span>Please wait...</span>
                </>
              ) : (
                <p>Create Todolist</p>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TodolistContainer;
