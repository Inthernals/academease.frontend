export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1168px] mx-auto  w-full min-h-screen">
      {children}
    </div>
  );
}
