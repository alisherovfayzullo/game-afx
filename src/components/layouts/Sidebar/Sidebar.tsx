import Menu from "@/components/common/Menu/Menu";
import { Gamepad } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-full max-w-72 border-r min-h-screen p-4">
      <h1 className="font-bold text-2xl flex items-center gap-1 mb-6">
        <Gamepad size={40} /> Game Club
      </h1>
      <Menu />
    </div>
  );
}

export default Sidebar;
