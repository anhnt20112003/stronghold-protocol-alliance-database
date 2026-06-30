import type { OperatorDto } from "../dtos/operator.dto";
import type { AllianceDto } from "../dtos/alliance.dto";
import { getAlliancesBySeason, getOperatorsBySeason } from "../utils/getDataBySeason";

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

type AllianceListProps = {
  season: string;
};

const AllianceList = ({ season }: AllianceListProps) => {
  const allianceData: AllianceDto[] = getAlliancesBySeason(season);
  const operatorData: OperatorDto[] = getOperatorsBySeason(season);

  const navigateToTerraWiki = (opName: string) => {
    window.open(`https://arknights.wiki.gg/wiki/${opName}`, "_blank");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mx-6 mb-6 gap-6">
      {allianceData.map((alliance) => {
        const ops = operatorData.filter((op) =>
          op.alliances.includes(alliance.name.replaceAll(" ", "_")),
        );
        return (
          <div className="w-full flex flex-col items-center justify-start">
            <div
              className="
            w-full flex flex-row items-start justify-start px-4 gap-4"
            >
              <div
                className="
                w-18 shrink-0 flex flex-col justify-start
                items-center text-center text-white
                leading-4.5 text-[14px] md:text-[18px] gap-2"
              >
                <div
                  className="w-18 h-18 border-3 border-[#25be97] flex justify-center items-center rounded-full"
                  style={{ background: "radial-gradient(#25be97, #212121 80%)" }}
                >
                  <img src={`/bondicons/icon_${alliance.bondId}.png`} className="w-12 h-12" />
                </div>
                {alliance.name}
              </div>
              <div className="flex items-start flex-col">
                <span className="text-sm text-white text-left text-[12px] md:text-[15px]">
                  Requires <span className="green">{alliance.activeCount}</span>{" "}
                  {alliance.activeCount == 1 ? "Operator" : "Operators"} to activate
                </span>
                <div
                  className="text-sm text-white text-left whitespace-pre-wrap text-[12px] md:text-[15px]"
                  dangerouslySetInnerHTML={{
                    __html: alliance.desc,
                  }}
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center">
              {ops.map((operator) => {
                return (
                  <button
                    className="relative mb-1 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                    onClick={() => navigateToTerraWiki(operator.name)}
                  >
                    <img
                      src={`/operatoricons/90px-${operator.name.replace(/\s+/g, "_")}_icon.webp`}
                      className="w-14 h-14"
                    />
                    <div
                      className={`
                      absolute w-5 h-5 right-0 top-0 
                      text-[12px] flex justify-center items-center
                      bg-[#212121]/50 rounded-xs border-2 `}
                      style={{
                        color: TIER_COLOR[operator.tier],
                        borderColor: TIER_COLOR[operator.tier],
                      }}
                    >
                      {ROMAN_NUMERALS[operator.tier]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllianceList;
