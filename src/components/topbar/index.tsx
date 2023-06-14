"use client";

import { PAGE_PATHS } from "@/constants";
import { useAuth } from "@/hooks";
import MenuItem from "./menu-item";

export default function TopBar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="bg-primary h-20">
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="text-white">
          <h1 className="font-normal">COMPANY NAME</h1>
        </div>
        <div>
          <MenuItem name="Home" path={PAGE_PATHS.HOME} />
          <MenuItem name="About" path={PAGE_PATHS.ABOUT} />
          {isAuthenticated && <MenuItem name="Admin" path={PAGE_PATHS.ADMIN} />}
          {!isAuthenticated && (
            <MenuItem name="Login" path={PAGE_PATHS.LOGIN} />
          )}
          {isAuthenticated && <MenuItem name="Logout" action={logout} />}
        </div>
      </div>
    </div>
  );
}
