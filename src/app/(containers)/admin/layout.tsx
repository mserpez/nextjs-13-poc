// DEMO: Admin Layout

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
    <div className="flex flex-row min-h-screen">
      <div className="bg-gray-600 min-h-full w-1/5 p-4">
        <div className="mb-8">
          <Link href="/admin">Admin</Link>
        </div>
        <div className="mb-8">
          <Link href="/">Web</Link>
        </div>
        <div className="mb-8">
          <Link href="/admin/users">Users</Link>
        </div>
      </div>
      <div className="min-h-full w-4/5">{children}</div>
    </div>
  );
}
