import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormInput = ({ name, type, register,errors }) => {
  return (
    <div>
      <Label className="capitalize mb-2">{name}</Label>
      <Input {...register(name)} placeholder={name} type={type} />
      {errors[name] && <p className="text-red-400">{errors[name].message}</p>}
    </div>
  );
};

export default FormInput;
