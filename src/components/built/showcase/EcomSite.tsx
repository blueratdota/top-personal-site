import mobilePhoto from "../../../assets/images/fanatec_bootleg/ecom_home.jpg";
import bodyPhoto from "../../../assets/images/fanatec_bootleg/ecom_home_full.jpg";
import pagePhoto from "../../../assets/images/fanatec_bootleg/ecom_page.jpg";

const EcomSite = () => {
  return (
    <div className="flex gap-5 h-[450px]">
      <div className="basis-[30%] h-full overflow-hidden rounded-2xl">
        <img className="h-full w-full object-cover" src={bodyPhoto} alt="" />
      </div>
      <div className="basis-[30%] h-full overflow-hidden rounded-2xl">
        <img className="h-full w-full object-cover" src={pagePhoto} alt="" />
      </div>
      <div className="flex-auto">
        <h1>Fanatec Site Copy</h1>
      </div>
    </div>
  );
};
export default EcomSite;
