"use client";
import InputForm from "@/components/auth/Input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import axiosInstance from "@/lib/axios";
import alert from "@/helper/alert";

const schema = z
  .object({
    username: z.string().min(1, { message: "Username is required" }),
    fullname: z.string().min(1, { message: "Full Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirm_password: z
      .string()
      .min(8, { message: "Confirm Password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const fetch = await axios.post("/api/auth/signup", data);
      console.log(data, fetch);
      alert("Success Signup", "success");
    } catch (err: any) {
      alert(err.message, "error");
      console.log(err);
    }
    reset();
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
              label="Username"
              placeholder="yourusername"
              type="text"
              name="username"
              register={register}
            />
            <InputForm
              errors={errors}
              register={register}
              label="Full Name"
              name="fullname"
              placeholder="Your Full Name"
              type="text"
            />
            <InputForm
              errors={errors}
              label="Email"
              register={register}
              name="email"
              placeholder="youremail@email.com"
              type="email"
            />
            <InputForm
              errors={errors}
              register={register}
              label="Password"
              name="password"
              placeholder="Enter strong password"
              type={showPassword ? "text" : "password"}
            />
            <InputForm
              errors={errors}
              register={register}
              label="Confirm Password"
              name="confirm_password"
              placeholder="Re-enter your password"
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
          <p className="text-slate-500   mt-1  text-sm">
            By clicking register, you agree to our{" "}
            <span className="text-blue-500">Terms of Service</span> and{" "}
            <span className="text-blue-500">Privacy Policy</span>.
          </p>
          <p className="text-slate-900 text-center mt-8 text-sm">
            have an account?{" "}
            <Link className="text-blue-500" href={"/auth/signin"}>
              <span>Sign in</span>
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
