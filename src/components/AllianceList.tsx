import { bondInfo } from "../data/alliances.json";

type AllianceInfo = {
  bondId: string;
  name: string;
  desc: string;
  activeCount: number;
};

const AllianceList = () => {
  const allianceData: AllianceInfo[] = bondInfo;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mx-6 mb-6 gap-6">
      {allianceData.map((alliance) => (
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
            <img src={`/bondicons/icon_${alliance.bondId}.png`} className="w-18 h-18" />

            {alliance.name}
          </div>
          <div className="flex items-start flex-col">
            <span className="text-sm text-white text-left text-[12px] md:text-[15px]">
              Requires <span className="green">{alliance.activeCount}</span> Operators to activate
            </span>
            <div
              className="text-sm text-white text-left whitespace-pre-wrap text-[12px] md:text-[15px]"
              dangerouslySetInnerHTML={{
                __html: alliance.desc,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllianceList;
