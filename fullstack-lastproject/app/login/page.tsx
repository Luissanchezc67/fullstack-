"use client";

import { actionLogin } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { Suspense,useState } from "react";

function LoginPage() {
  const params = useSearchParams();
  const [message, setMessage] = useState("");

  const path = params.get("path");

  const login = async (formData: FormData) => {
    const message = await actionLogin(formData);
    setMessage(message);
  };

  const clearMessage = () => setMessage("");

  return (
    <main className="h-screen flex flex-col justify-center items-center ">
      <form action={login}  className="flex flex-col items-start gap-4" >
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
        <h1>READY FOR UR SESSION {path && `to ${path}`}</h1>

        <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900" > USERNAME </label>
        <Input
          type="text"
          name="username"
          placeholder="username"
          onChange={clearMessage}
        ></Input>
        <label htmlFor="Password" className="block text-sm font-medium leading-6 text-gray-900" > PASSWORD </label>

        <Input
          type="password"
          name="password"
          placeholder="password"
          onChange={clearMessage}
        ></Input>

        <div className="text-sm">
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Forgot password?
          </a>
        </div>

        <input type="hidden" name="path" value={path || ""} />
          <Button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Ready
          </Button>
        <p className="text-red-500 h-12">{message} </p>

        
      </form>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense>
      <LoginPage />
    </Suspense>
  );
}