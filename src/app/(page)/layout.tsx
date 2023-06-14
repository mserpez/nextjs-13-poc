import TopBar from "@/components/topbar";

export default function PageLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <TopBar />
      <div>{children}</div>
    </div>
  );
}
