export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}
