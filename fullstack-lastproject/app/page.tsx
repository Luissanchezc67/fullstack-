import { actionLogout } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
 <main>
  <h1>Home Page</h1>
  <p>area be restreact . . .</p>
  <form className="mt-12" action={actionLogout}>
      <Button>Exit</Button>
  </form>
 </main>
  );
}
