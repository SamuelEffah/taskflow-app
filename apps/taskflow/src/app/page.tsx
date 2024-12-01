import NavBar from "./components/navbar/navbar";
import SideBar from "./components/sidebar/sidebar";

export default function Home() {
  return (
    <div className="h-full  relative font-[family-name:var(--font-geist-sans)]">
      <NavBar/>
      <div className="relative h-[calc(100%-60px)]">
        <SideBar/>
      </div>
    </div>
  );
}
