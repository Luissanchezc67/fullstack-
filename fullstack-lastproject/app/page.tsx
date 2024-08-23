"use client"

import { actionLogout } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";


export default function Home() {
  return (
 <main>
  <Navbar></Navbar>
  <h1 className="pt-16 " >Home Page</h1>
  <p>area be restreact . . .</p>
  <form className=" mt-12" action={actionLogout}>
      <Button>Exit</Button>
  </form>
 </main>
  );
}
