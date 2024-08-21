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
    <main className="h-screen flex flex-col justify-center items-center">
      <form action={login} className="flex flex-col items-start gap-2">
        <h1>READY FOR UR SESSION {path && `to ${path}`}</h1>
        <Input
          type="text"
          name="username"
          placeholder="username"
          onChange={clearMessage}
        ></Input>

        <Input
          type="password"
          name="password"
          placeholder="password"
          onChange={clearMessage}
        ></Input>

        <input type="hidden" name="path" value={path || ""} />
        <Button>Ready</Button>
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