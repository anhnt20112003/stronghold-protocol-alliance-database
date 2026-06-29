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
      className="
        flex flex-row justify-start items-center
        gap-1 md:gap-3 px-2 py-1 md:px-3 md:py-1.5
        border-2 rounded-xl text-[10px] md:text-[14px]
      "
      style={{
        borderColor: isActive ? "#00ffbb" : "#25be97",
        backgroundColor: isActive ? "#00ffbb" : "transparent",
        color: isActive ? "black" : "white",
      }}
      onClick={onClick}
    >
      <div
        id={allianceName}
        className={`
          w-5 h-5 md:w-7 md:h-7 shrink-0
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
      <div className="flex justify-center items-center w-full">
        {allianceName === "Assist_Operator" ? "Assist" : allianceName}
      </div>
    </button>
  );
}

export default AllianceButton;
