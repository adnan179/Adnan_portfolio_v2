import Hero from "@/components/home/Hero";
import ProjectsComponent from "@/components/home/ProjectsComponent";
import SpeedySnapshot from "@/components/home/SpeedySnapshot";

export default function Home() {
  return (
    <div className="w-full min-h-screen -mt-[80px]">
      <Hero />
      <SpeedySnapshot />
      <ProjectsComponent />
    </div>
  );
}
