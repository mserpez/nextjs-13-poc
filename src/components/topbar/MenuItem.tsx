import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MenuItemProps {
  name: string;
  path?: string;
  action?: () => void;
}

export default function MenuItem({ name, path, action }: MenuItemProps) {
  const pathname = usePathname();

  const isCurrentPath = pathname === path;

  if (action) {
    return (
      <button className="text-white font-light ml-2" onClick={action}>
        {name}
      </button>
    );
  }

  if (!path) return null;

  return (
    <Link
      key={`route-${name}`}
      className={`text-white mx-4 font-${!isCurrentPath ? "light" : "normal"}`}
      href={path}
    >
      {name}
    </Link>
  );
}
