import Link from "next/link";
import styles from "./styles.module.css";

export default function PageLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <div
        className={`${styles.menu} bg-gray-600 flex items-center justify-between px-8`}
      >
        <div>MENU</div>
        <div>
          <Link className="mx-4" href="/">
            Home
          </Link>
          <Link className="mx-4" href="/about">
            About
          </Link>
          <Link className="mx-4" href="/admin">
            Admin
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
