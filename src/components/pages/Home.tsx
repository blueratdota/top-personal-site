import HorsePic from "../../assets/images/horse-large.jpg";
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
      <div className="max-w-[1024px] mx-auto my-20">
        <h1 className="font-bold text-xl">Recent Projects & Work</h1>
        <p>Here are a few of the things I've been working on lately</p>
        <div className="grid grid-cols-2 gap-5 py-5">
          <div className="h-72 bg-cyan-300">project 1</div>
          <div className="h-72 bg-cyan-300">project 2</div>
          <div className="h-72 bg-cyan-300">project 3</div>
          <div className="h-72 bg-cyan-300">project 4</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
