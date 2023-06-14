import { RoleGuard } from "@/guards";
import { AuthRoleType } from "@/providers/auth/types";

export default function Page() {
  return (
    <RoleGuard authRoleType={AuthRoleType.ADMIN} authLevel={1}>
      <div className="flex items-center justify-center p-24 flex-col">
        <h2>Section 2</h2>
        <p className="m-8">Only logged ADMIN role with lv 1 can see this</p>
      </div>
    </RoleGuard>
  );
}
