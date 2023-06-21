"use client";

import { PAGE_PATHS } from "@/constants";
import { useAuth } from "@/hooks";
import MenuItem, { MenuItemProps } from "./MenuItem";

interface TopBarItemsProps extends MenuItemProps {
  showOnlyOnAuth?: boolean;
  showOnlyOnGest?: boolean;
}

interface TopBarProps {
  appName: string;
  items?: TopBarItemsProps[];
  showLogoutItem?: boolean;
  showLoginItem?: boolean;
}

export default function TopBar(props: TopBarProps) {
  const { appName, items, showLoginItem, showLogoutItem } = props;
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="bg-primary h-20">
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="text-white">
          <h1 className="font-normal">{appName}</h1>
        </div>
        <div>
          {items?.map((item) => {
            if (
              (item.showOnlyOnAuth && !isAuthenticated) ||
              (item.showOnlyOnGest && isAuthenticated)
            ) {
              return null;
            }

            return (
              <MenuItem
                key={item.name}
                name={item.name}
                path={item.path}
                action={item.action}
              />
            );
          })}
          {showLoginItem && !isAuthenticated && (
            <MenuItem name="Login" path={PAGE_PATHS.LOGIN} />
          )}
          {showLogoutItem && isAuthenticated && (
            <MenuItem name="Logout" action={logout} />
          )}
        </div>
      </div>
    </div>
  );
}
