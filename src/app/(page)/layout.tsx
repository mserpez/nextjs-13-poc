import { TopBar } from "@/components";
import { PAGE_PATHS } from "@/config";

export default function PageLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <TopBar
        appName="APP NAME"
        showLogoutItem
        showLoginItem
        items={[
          { name: "Home", path: PAGE_PATHS.HOME },
          { name: "About", path: PAGE_PATHS.ABOUT },
          { name: "Contact", path: PAGE_PATHS.CONTACT },
          { name: "Admin", path: PAGE_PATHS.ADMIN, showOnlyOnAuth: true },
        ]}
      />
      <div>{children}</div>
    </div>
  );
}
