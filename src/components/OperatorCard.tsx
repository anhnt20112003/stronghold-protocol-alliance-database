import type { OperatorDto } from "../dtos/operator.dto";
import { getBondImage } from "../utils/getImageLink";

type OperatorCardProps = {
  operator: OperatorDto;
};

const ROMAN_NUMERALS: Record<number, string> = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
};

const TIER_COLOR: Record<number, string> = {
  1: "#c4c4c4",
  2: "#ffffff",
  3: "#39edb5",
  4: "#34bad3",
  5: "#ebbd2f",
  6: "#fd8002",
};

function OperatorCard(props: OperatorCardProps) {
  const { operator } = props;

  // const [displayEliteAttribute, setDisplayEliteAttribute] = useState<boolean>(false);

  const navigateToTerraWiki = (opName: string) => {
    window.open(`https://arknights.wiki.gg/wiki/${opName}`, "_blank");
  };

  const getAttributeTypeImgLink = (name: string) => {
    if (name === "Specialized") return "/attributeicons/s_icon_support.png";
    if (name === "Combat") return "/attributeicons/s_icon_battle.png";
    if (name === "Prep") return "/attributeicons/s_icon_gold.png";
    return "/attributeicons/s_icon_bond.png";
  };

  return (
    <div className="w-full flex flex-row items-start justify-start px-4 gap-4">
      <div className="w-16 shrink-0 flex flex-col justify-start items-center text-center text-white leading-3.5 text-[12px] md:text-[14px]">
        <button
          className="relative cursor-pointer mb-1 hover:-translate-y-1 transition-transform duration-300"
          onClick={() => navigateToTerraWiki(operator.name)}
        >
          <img
            src={`/operatoricons/90px-${operator.name.replace(/\s+/g, "_")}_icon.webp`}
            className="w-16 h-16"
          />
          <div
            className={`
          absolute w-6 h-6 right-0 top-0 
          text-sm flex justify-center items-center
          bg-[#212121]/50 rounded-sm border-2 `}
            style={{
              color: TIER_COLOR[operator.tier],
              borderColor: TIER_COLOR[operator.tier],
            }}
          >
            {ROMAN_NUMERALS[operator.tier]}
          </div>
        </button>
        {operator.name}
      </div>

      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-row gap-1 md:gap-2 pb-1">
          {operator.alliances.map((alliance) => (
            <div
              id={alliance}
              className={`
              w-7 h-7 border-[#25be97] border rounded-full
              flex justify-center items-center
            `}
              style={{ background: "radial-gradient(#25be97, #212121 80%)" }}
            >
              <img
                className="
                w-[60%] h-[60%]
                md:w-[65%] md:h-[65%]
              "
                src={getBondImage(alliance)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-3 text-black text-[10px] md:text-[12px]">
          <div className="px-1.5 mb-1 rounded-sm bg-[#8a8a8a] text-white flex flex-row gap-1 items-center justify-center">
            <img
              src={getAttributeTypeImgLink(operator.attributeType)}
              className="h-4 w-4 object-contain"
            />
            {operator.attributeType}
          </div>
          {/* <div
            className={`
            py-0.5 px-2 rounded-sm text-white
            flex items-center gap-2
            bg-[${displayEliteAttribute ? "#05ddae" : "#8a8a8a"}]
          `}
          >
            Elite?
            <input
              type="checkbox"
              className="w-4 h-4"
              checked={displayEliteAttribute}
              onChange={(e) => setDisplayEliteAttribute(e.target.checked)}
            />
          </div> */}
        </div>
        <div
          className="text-sm text-white text-left whitespace-pre-wrap text-[10px] md:text-[14px]"
          dangerouslySetInnerHTML={{
            __html: operator.attribute,
          }}
        ></div>
      </div>
    </div>
  );
}
export default OperatorCard;
