import TopBar from "@/app/components/topbar";

export default function PageLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <TopBar />
      <div>{children}</div>
    </div>
  );
}
