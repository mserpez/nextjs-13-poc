// DEMO: Admin Layout

import { TopBar } from "@/components";
import { PAGE_PATHS } from "@/config";
import { AuthGuard } from "@/core/guards";
import Link from "next/link";

/*
  INFO: Partial Rendering

  When navigating between sibling routes (e.g. /dashboard/settings and /dashboard/analytics below), 
  Next.js will only fetch and render the layouts and pages in routes that change. 
  It will not re-fetch or re-render anything above the segments in the subtree. 
  This means that in routes that share a layout, the layout will be preserved when a user navigates between sibling pages.
 */
export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <AuthGuard>
      <div className="flex h-screen flex-col">
        <TopBar
          showLogoutItem
          appName="ADMIN"
          items={[{ name: "Web", path: PAGE_PATHS.HOME }]}
        />
        <div className="flex h-full">
          <div className="bg-gray-950 h-full w-1/5 p-4">
            <div className="mb-8 text-white">
              <Link href="/admin/users">Users</Link>
            </div>
            <div className="mb-8 text-white">
              <Link href="/admin/section-1">Sec 1 (Admin & Lv 0)</Link>
            </div>
            <div className="mb-8 text-white">
              <Link href="/admin/section-2">Sec 2 (Admin & Lv 1)</Link>
            </div>
          </div>
          <div className="h-full w-4/5">{children}</div>
        </div>
      </div>
    </AuthGuard>
  );
}
