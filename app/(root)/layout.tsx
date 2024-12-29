import Sidebar from "@/components/sidebar";
import Image from 'next/image'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = { firstName: "Surya", lastName: "Gajjela" };

  return (
    <main className="flex h-screen w-full font-inter">
      {/* Main Header fixed */}
      <header className="fixed top-0 left-0 w-full bg-blue-500 text-white py-6 px-6 shadow-md z-50">
        <div className="flex items-center space-x-2">
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="SunshineBank logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Sunshine Bank</h1>
        </div>
      </header>

      {/* Sidebar fixed */}
      <aside className="fixed top-16 left-0 h-full w-64 bg-gray-800 text-white pt-5">
        <Sidebar user={loggedInUser} />
      </aside>

      {/* Main Content */}
      <div className="ml-64 pt-24 pl-0 pr-4 overflow-auto">
        {/* Adjust the left margin to accommodate the sidebar width and space for the header */}
        {children}
      </div>
    </main>
  );
}
