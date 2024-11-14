import { Tabs } from "@chakra-ui/react";

const Header = () => {
  return (
    <div className="fixed -translate-x-1/2 -translate-y-1/2 left-1/2 top-[54px] bg-cWhite p-0.5 rounded-xl shadow-lg">
      <Tabs.Root variant="plain">
        <Tabs.List className="w-fit flex justify-center gap-2 py-2 px-2 rounded-lg mx-auto bg-cBeige">
          <Tabs.Trigger
            value="members"
            className="w-20 text-center flex justify-center text-cBlack"
          >
            Home
          </Tabs.Trigger>
          <Tabs.Trigger
            value="projects"
            className="w-20 text-center flex justify-center text-cBlack"
          >
            Projects
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tasks"
            className="w-20 text-center flex justify-center text-cBlack"
          >
            About
          </Tabs.Trigger>
          <Tabs.Indicator className="rounded-xl bg-cWhite" />
        </Tabs.List>
      </Tabs.Root>
    </div>
  );
};
export default Header;
