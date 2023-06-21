"use client";

import { Icon } from "@/components";
import { useAuth } from "../hooks";
import { AuthRoleType } from "../providers/auth/types";

interface RoleGuardProps extends React.PropsWithChildren {
  authRoleType: AuthRoleType | AuthRoleType[];
  authLevel?: number;
}

export default function RoleGuard(props: RoleGuardProps) {
  const { children, authRoleType, authLevel } = props;

  const { isAuthenticated, isInitialized, user } = useAuth();

  let arrRole = Array.isArray(authRoleType) ? authRoleType : [authRoleType];

  if (!isInitialized || !isAuthenticated) return null;

  // Role
  if (!user?.role || !arrRole.includes(user.role)) {
    return (
      <div className="flex justify-center items-center h-full flex-col">
        <Icon className="m-8" icon="mdi:remove" color="red" size={40} />
        <h2>Permission Deneid by Role</h2>
        <h2>{`Required roles: ${arrRole.join(",")}`}</h2>
        <h2>{`Current role: ${user?.role}`}</h2>
      </div>
    );
  }

  // Role Level
  if (authLevel && user?.level !== authLevel) {
    return (
      <div className="flex justify-center items-center h-full flex-col">
        <Icon className="m-8" icon="mdi:remove" color="red" size={40} />
        <h2>Permission Deneid by Role Level</h2>
        <h2>{`Required level: ${authLevel}`}</h2>
        <h2>{`Current level: ${user.level}`}</h2>
      </div>
    );
  }

  return children;
}
