"use client"

import { actionLogout } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "@radix-ui/react-navigation-menu";



import Image from "next/image";

export default function Home() {
  return (
 <main>
  
  

<NavigationMenu>
  <Link href="/other"  >
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Documentation
    </NavigationMenuLink>
  </Link>
</NavigationMenu>


  <h1>Home Page</h1>
  <p>area be restreact . . .</p>
  <form className="mt-12" action={actionLogout}>
      <Button>Exit</Button>
  </form>
 </main>
  );
}
