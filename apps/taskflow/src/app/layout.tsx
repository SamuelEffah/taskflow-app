import localFont from "next/font/local";

import "./globals.css";
import NavBar from "./components/navbar/navbar";
import SideBar from "./components/sidebar/sidebar";
import TaskflowDrawer from "./components/drawer/drawer";
import UserOverviewModal from "./components/user-overview-modal/user-overview-modal";
import CreateProjectModal from "./components/create-project-modal/create-project-modal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
   
         <div className="relative h-full font-[family-name:var(--font-geist-sans)]">
         <SideBar />
          <div className="flex  flex-col  ml-[56px] bg-[#fcfcfc] shadow-md h-full relative md:ml-[208px] md:w-[calc(100%-208px)] w-[calc(100%-56px)]">
          <NavBar />
          <div className="h-[calc(100%-48px)] overflow-auto py-4 md:px-8 px-2"> 
            {children}
          </div>
          </div>
          <TaskflowDrawer/>
          <UserOverviewModal/>
          <CreateProjectModal/>
        </div> 
      </body>
    </html>
  );
}
