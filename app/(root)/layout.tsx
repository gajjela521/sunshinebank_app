import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser={firstName:'Surya',lastName:'Gajjela'};
  return (
    <main className="flex h-screen w-full font-inter">
        {/* <Sidebar user={loggedInUser}/> */}
        {children}
    </main>
  );
}
