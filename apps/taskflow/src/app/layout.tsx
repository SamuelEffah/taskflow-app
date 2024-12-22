import localFont from "next/font/local";
import '@mantine/core/styles.css';

import "./globals.css";

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
        
        {children}
    {/* <div className="relative h-full font-[family-name:var(--font-geist-sans)]">
      <NavBar/>
      <div className="flex relative h-[calc(100%-60px)]">
        <SideBar/>
        <div className="relative h-full md:ml-[240px] ml-[56px] md:w-[calc(100%-240px)] w-[calc(100%-56px)]">
          <div className="h-full relative">
          {children}
          </div>
        </div>
      </div>
    </div> */}
       
      </body>
    </html>
  );
}
