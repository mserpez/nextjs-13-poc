"use client";
import { GestGuard } from "@/guards";
import { useAuth } from "@/hooks";
import { AuthRoleType } from "@/providers/auth/types";

export default function Page() {
  const { login } = useAuth();

  return (
    <GestGuard>
      <div className="flex justify-center p-24 flex-col items-center">
        <button onClick={() => login(AuthRoleType.USER)}>Login as User</button>
        <br />
        <button onClick={() => login(AuthRoleType.ADMIN)}>
          Login as Admin 0
        </button>
        <br />
        <button onClick={() => login(AuthRoleType.ADMIN, 1)}>
          Login as Admin 1
        </button>
      </div>
    </GestGuard>
  );
}