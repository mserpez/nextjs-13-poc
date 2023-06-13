"use client";

import { PAGE_PATHS } from "@/app/constants";
import { useAuth } from "@/app/hooks";
import Link from "next/link";

export default function AdminTopbar() {
  const { user, logout } = useAuth();

  return (
    <div className="bg-primary h-20">
      <div className="mx-auto flex items-center justify-between h-full px-4">
        <div className="text-white">
          <Link href={PAGE_PATHS.ADMIN}>
            <h1 className="font-normal">{`ADMIN | Role: ${user?.role} | Level: ${user?.level}`}</h1>
          </Link>
        </div>
        <div>
          <button className="text-white" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
