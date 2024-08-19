import { actionLogin } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flexc-col justify-center items-center">
      <h1>READY FOR UR SESION</h1>
      <p></p>
        <form action={actionLogin}>
          <Button>Ready</Button>
        </form>
    </main>
  );
}
