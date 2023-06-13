"use client";

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
        <h2>Permission Deneid by Role</h2>
        <h2>{`Required roles: ${arrRole.join(",")}`}</h2>
      </div>
    );
  }
  // Role Level
  if (authLevel && user?.level !== authLevel) {
    return (
      <div className="flex justify-center items-center h-full flex-col">
        <h2>Permission Deneid by Role Level</h2>
        <h2>{`Required level: ${authLevel}`}</h2>
      </div>
    );
  }

  return children;
}
