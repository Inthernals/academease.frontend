import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { FormField } from "@/types/InputForm";

export default function InputForm({
  type,
  placeholder,
  label,
  name,
  errors,
  register,
  valueAsNumber,
  className,
}: FormField) {
  return (
    <div className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        {...register(name, { valueAsNumber })}
        type={type}
        placeholder={placeholder}
        id={name}
        className="mt-1"
      />
      <div className="text-red-600 text-xs mt-1">
        {errors[name] && <span>{errors[name]?.message as string}</span>}
      </div>
    </div>
  );
}
