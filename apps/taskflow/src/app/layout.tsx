import localFont from "next/font/local";

import "./globals.css";
import NavBar from "./components/navbar/navbar";
import SideBar from "./components/sidebar/sidebar";

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
          <div className="flex relative flex-col  ml-[56px] bg-[#fcfcfc] h-full relative md:ml-[208px] md:w-[calc(100%-208px)] w-[calc(100%-56px)]">
          <NavBar />
          <div className="h-[calc(100%-48px)] overflow-auto p-4 px-8">
            
            {children}

          </div>
           
          </div>
        </div> 
      </body>
    </html>
  );
}
