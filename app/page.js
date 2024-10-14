import Hero from "@/components/home/Hero";
import ProjectsComponent from "@/components/home/ProjectsComponent";
import SpeedySnapshot from "@/components/home/SpeedySnapshot";
import ServicesComponent from "@/components/home/ServicesComponent";
import ShareYourThoughts from "@/components/home/ShareYourThoughts";

export default function Home() {
  return (
    <div className="w-full min-h-screen -mt-[80px]">
      <Hero />
      <SpeedySnapshot />
      <ProjectsComponent />
      <ServicesComponent />
      <ShareYourThoughts />
    </div>
  );
}
