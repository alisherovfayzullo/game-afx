"use client";

import Link from "next/link";
import { Gamepad, ChartLine, DoorOpen } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface MenuItem {
  text: string;
  href: string;
  icon: any;
}

const menu: MenuItem[] = [
  {
    text: "Asosiy",
    href: "/dashboard",
    icon: ChartLine,
  },
  {
    text: "Xonalar",
    href: "/dashboard/rooms",
    icon: DoorOpen,
  },
];

function Menu() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {menu.map((menuItem) => {
          let Icon = menuItem.icon;
          return (
            <li key={menuItem.href}>
              <Link href={menuItem.href} className="w-full">
                <Button
                  variant={pathname === menuItem.href ? "default" : "outline"}
                  className="w-full justify-start gap-3"
                >
                  <Icon size={20} />
                  <span>{menuItem.text}</span>
                </Button>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;
