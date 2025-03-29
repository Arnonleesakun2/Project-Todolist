import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";

const FormTextArea = ({ name, register, errors }) => {
  return (
    <div>
      <Label className="capitalize mb-2">{name}</Label>
      <Textarea {...register(name)} name={name} placeholder={name} />
      {errors[name] && <p className="text-red-400">{errors[name].message}</p>}
    </div>
  );
};

export default FormTextArea;
