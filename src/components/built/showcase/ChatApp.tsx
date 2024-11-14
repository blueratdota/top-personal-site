import { Button } from "@chakra-ui/react";
import mobilePhoto from "../../../assets/images/fanatec_bootleg/ecom_home.jpg";
import bodyPhoto from "../../../assets/images/fanatec_bootleg/ecom_home_full.jpg";
import pagePhoto from "../../../assets/images/fanatec_bootleg/ecom_page.jpg";
import Icon from "@mdi/react";
import { mdiLightningBoltCircle, mdiReact, mdiTailwind } from "@mdi/js";

const ChatApp = () => {
  return (
    <div className="flex flex-row-reverse gap-5 h-[450px]">
      <div className="basis-[30%] h-full overflow-hidden rounded-lg">
        <img
          className="h-full w-full object-cover object-top"
          src={pagePhoto}
          alt=""
        />
      </div>
      <div className="basis-[30%] h-full overflow-hidden rounded-lg">
        <img className="h-full w-full object-cover" src={bodyPhoto} alt="" />
      </div>
      <div className="basis-[40%] mx-auto my-auto px-5">
        <h1 className="font-bold text-2xl text-center">Fanatec Site Copy</h1>
        <div className="flex flex-wrap gap-2 justify-center py-1">
          <div className="flex gap-1 items-center bg-cBrown text-cWhite py-0.5 px-2 w-fit rounded-xl">
            <Icon className="h-4" path={mdiReact} />
            <p className="text-[12px]">react</p>
          </div>
          <div className="flex gap-1 items-center bg-cBrown text-cWhite py-0.5 px-2 w-fit rounded-xl">
            <Icon className="h-4" path={mdiTailwind} />
            <p className="text-[12px]">tailwind</p>
          </div>
          <div className="flex gap-1 items-center bg-cBrown text-cWhite py-0.5 px-2 w-fit rounded-xl">
            <Icon className="h-4" path={mdiLightningBoltCircle} />
            <p className="text-[12px]">chakra-ui</p>
          </div>
          <div className="flex gap-1 items-center bg-cBrown text-cWhite py-0.5 px-2 w-fit rounded-xl">
            <Icon className="h-4" path={mdiLightningBoltCircle} />
            <p className="text-[12px]">chakra-ui</p>
          </div>
          <div className="flex gap-1 items-center bg-cBrown text-cWhite py-0.5 px-2 w-fit rounded-xl">
            <Icon className="h-4" path={mdiLightningBoltCircle} />
            <p className="text-[12px]">chakra-ui</p>
          </div>
        </div>
        <p className="text-center py-3">
          An attempt to create a 1:1 copy of the official Fanatec website. All
          photos and information are taken from the original site. It features a
          responsive design using Tailwind CSS and React.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="border text-cBrown font-bold border-cBrown border-opacity-50 rounded-lg w-28 hover:bg-cBrown hover:text-cWhite hover:border-cBeige">
            View Code
          </Button>
          <Button className="border text-cBrown font-bold border-cBrown border-opacity-50 rounded-lg w-28 hover:bg-cBrown hover:text-cWhite hover:border-cBeige">
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ChatApp;
