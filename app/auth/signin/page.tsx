"use client";

import { FormDataSignIn } from "@/types/InputForm";
import InputForm from "@/components/auth/Input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState<FormDataSignIn>({
    email: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),

    defaultValues: formValues,
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("HAHAHAHHA");
    console.log(data, "WOWOOIWIOWOI");
  };

  const handleCheckboxChange = () => {
    setShowPassword((v) => !v);
  };

  return (
    <main className="bg-white min-h-screen flex justify-center items-center">
      <section className="w-[374px]  p-8">
        <Image
          src={"/image/logo.png"}
          width={300}
          className="w-[246px] m-auto"
          height={300}
          alt="Logo Academease"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mt-8 gap-4">
            <InputForm
              errors={errors}
              name="email"
              label="Email"
              register={register}
              placeholder="youremail@email.com"
              type="email"
            />
            <InputForm
              errors={errors}
              name="password"
              label="Password"
              register={register}
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={showPassword}
                  onClick={handleCheckboxChange}
                  className="border border-slatae-300"
                  id="show"
                />
                <Label htmlFor="show">Show password</Label>
              </div>
              <Link href={"#"} className="text-sm text-blue-500">
                <span>Forgot Password?</span>
              </Link>
            </div>
          </div>
          <Button className="mt-8 bg-blue-500 w-full font-semibold text-white text-base">
            Sign in
          </Button>
          <p className="text-slate-900 text-center mt-8 text-sm">
            Don&apos;t have an account?{" "}
            <Link className="text-blue-500" href={"/auth/signup"}>
              <span>Sign up</span>
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
