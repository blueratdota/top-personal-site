import { Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>(
    useLocation().pathname
  );
  const { pathname } = useLocation();
  const mainPath = pathname.split("/")[1];
  useEffect(() => {
    setSelectedTab(() => {
      if (mainPath.length > 0) {
        return mainPath;
      } else return "home";
    });
  }, [selectedTab]);

  console.log(mainPath);
  return (
    <div className="fixed -translate-x-1/2 -translate-y-1/2 left-1/2 top-[54px] bg-cWhite p-0.5 rounded-xl shadow-lg">
      <Tabs.Root variant="plain" defaultValue={selectedTab} value={selectedTab}>
        <Tabs.List className="w-fit flex justify-center gap-2 py-2 px-2 rounded-lg mx-auto bg-cBeige">
          <Tabs.Trigger
            value="home"
            className="w-20 text-center flex justify-center text-cBlack"
            onClick={() => {
              setSelectedTab("home");
            }}
          >
            <Link to={"/"}>Home</Link>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="projects"
            className="w-20 text-center flex justify-center text-cBlack"
            onClick={() => {
              setSelectedTab("projects");
            }}
          >
            <Link to={"/projects"}>Projects</Link>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="about"
            className="w-20 text-center flex justify-center text-cBlack"
            onClick={() => {
              setSelectedTab("about");
            }}
          >
            <Link to={"/about"}>About</Link>
          </Tabs.Trigger>
          <Tabs.Indicator className="rounded-xl bg-cWhite" />
        </Tabs.List>
      </Tabs.Root>
    </div>
  );
};
export default Header;
