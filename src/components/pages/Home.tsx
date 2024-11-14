import HorsePic from "../../assets/images/horse-large.jpg";
import EcomSite from "../built/showcase/EcomSite";
const Home = () => {
  return (
    <div className="pt-32">
      <div className="max-w-[1024px] mx-auto flex gap-10 ">
        <div className="flex-1 flex flex-col justify-end">
          <h1 className="font-bold text-3xl">
            The one-man tech team ready to bring your next big idea to life.
          </h1>
          <p className="mt-5">
            I'm Rafael, an aspiring full-stack web developer from Philippines,
            building apps and online experiences for companies large and small.
          </p>
        </div>
        <div className="flex-1">
          <img src={HorsePic} alt="profile-photo" />
        </div>
      </div>
      <div className="bg-cBeige my-20">
        <div className="max-w-[1024px] mx-auto py-10">
          <h1 className="font-bold text-xl">Recent Projects & Work</h1>
          <p>Here are a few of the things I've been working on lately</p>
          <div className="p-10">
            <EcomSite />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
