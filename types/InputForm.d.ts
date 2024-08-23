import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "./SigninForm";

export type ValidFieldNames =
  | "email"
  | "password"
  | "username"
  | "confirm_password"
  | "fullname";

export interface FormDataSignIn {
  email: string;
  password: string;
}
export interface FormDataSignUp {
  username: string;
  email: string;
  password: string;
  fullname: string;
  confirm_password: string;
}

export interface FormField {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  register: UseFormRegister;
  label: string;
  name: ValidFieldNames;
  errors: FieldErrors<FieldValues>;
  valueAsNumber?: boolean;
  className?: string;
}
