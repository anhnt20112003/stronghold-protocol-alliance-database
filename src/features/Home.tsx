import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <div className="px-10 flex flex-col items-start text-left gap-5 text-white">
      <div className="text-xl md:text-3xl">Welcome to Stronghold Protocol Alliance Database</div>
      <div className="text-lg md:text-xl">
        This page is dedicated to documenting relevent data regarding the Stronghold Protocol
        Alliance seasons for the EN community. CN content are tentatively translated and may not
        reflect the official translations.
      </div>
      <div className="text-lg md:text-xl">
        Great thanks to PRTS and AK Terra Wiki for their work and supports.
      </div>
      <div className="text-lg md:text-xl">
        If any issue arises (i.e. bugs, incorrect data, typo, etc), please contact me using methods
        below:
      </div>
      <div className="flex flex-row text-2xl md:text-3xl w-full gap-10">
        <div
          onClick={() =>
            window.open("https://github.com/anhnt20112003/stronghold-protocol-alliance-database")
          }
          className="cursor-pointer"
        >
          <FaGithub />
        </div>
        <div
          onClick={() => window.open("https://x.com/NguynTu20532273")}
          className="cursor-pointer"
        >
          <FaTwitter />
        </div>
        <div
          onClick={() => window.open("https://www.facebook.com/profile.php?id=100087421415239")}
          className="cursor-pointer"
        >
          <FaFacebook />
        </div>
      </div>
    </div>
  );
}
