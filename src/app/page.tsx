import BannerHome from "@/components/BannerHome";
import FooterContacts from "@/components/FooterContacts";
import MoreAboutMe from "@/components/MoreAboutMe";
import ViewProjects from "@/components/ViewProjects";
import { fetchContentful } from "@/service/contentful";

const Home = async () => {
  const projects = await fetchContentful({
    select: ['cover', "description", "projectName", "title"],
    cache: "force-cache"
  });

  return (
    <div>
      <div 
        className="h-[600px] w-full"
      >
        <BannerHome />
      </div>
      
      <ViewProjects 
        projects={projects}
      />

      <MoreAboutMe />
      <FooterContacts />
    </div>  
  )
}

export default Home;