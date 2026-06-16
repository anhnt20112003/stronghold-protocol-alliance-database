import { getBondImage } from "../utils/getImageLink";

type AllianceButtonProps = {
  allianceName: string;
  isActive?: boolean;
  onClick?: () => void;
};

function AllianceButton(props: AllianceButtonProps) {
  const { allianceName, isActive = false, onClick = () => {} } = props;
  return (
    <button
      className={`
        flex flex-row justify-center items-center gap-1 md:gap-3
        px-2 py-1 md:px-3 md:py-1.5
        border-2 rounded-xl border-[${isActive ? "#00ffbb" : "#25be97"}]
        text-[10px] md:text-[12px] ${isActive ? "bg-[#00ffbb]" : ""}
        ${isActive ? "text-black" : "text-white"}
      `}
      onClick={onClick}
    >
      <div
        id={allianceName}
        className={`
          w-5 h-5 md:w-7 md:h-7
          border-[#25be97] border rounded-full
          flex justify-center items-center
        `}
        style={{ background: "radial-gradient(#25be97, #212121 80%)" }}
      >
        <img
          className="
            w-[60%] h-[60%]
            md:w-[65%] md:h-[65%]
          "
          src={getBondImage(allianceName)}
        />
      </div>
      {allianceName.replaceAll("_", " ")}
    </button>
  );
}

export default AllianceButton;
