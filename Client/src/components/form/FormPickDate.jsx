import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useState, useEffect } from "react";

const FormPickDate = ({ name, register, setValue, errors }) => {
  const [date, setDate] = useState(null);

  const handleSelectDate = (selectedDate) => {
    if (!selectedDate) return;

    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    setDate(selectedDate);
    setValue(name, formattedDate); // ใช้ setValue เพื่ออัปเดตค่าใน react-hook-form
  };

  return (
    <div className="w-full">
      <Label className="capitalize mb-2">{name}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Input
            {...register(name)}
            type="text"
            value={date ? format(date, "yyyy-MM-dd") : ""}
            placeholder="Select a date"
            readOnly
            className="cursor-pointer"
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelectDate}
            className="rounded-md border"
          />
        </PopoverContent>
      </Popover>
      {errors[name] && <p className="text-red-400">{errors[name].message}</p>}
    </div>
  );
};

export default FormPickDate;