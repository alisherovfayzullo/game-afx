import { ReactNode } from "react";

export default function AuthLogin({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-amber-500">
      {children}
    </div>
  );
}
