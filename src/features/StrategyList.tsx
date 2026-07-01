import { getStrategiesBySeason } from "../utils/getDataBySeason";

type StrategyDto = {
  name: string;
  iconLink: string;
  initialHp: number;
  effectName: string;
  effectDesc: string;
};

type StrategyListProps = {
  season: string;
};

const StrategyList = ({ season }: StrategyListProps) => {
  const strats: StrategyDto[] = getStrategiesBySeason(season);
  return (
    <div className="grid grid-cols md:grid-cols-3 mx-6 mb-6 gap-6">
      {strats.map((strategy) => (
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
              className="w-18 h-18 border-3 border-[#25be97] flex justify-center items-center"
              // style={{ background: "radial-gradient(#25be97, #212121 80%)" }}
            >
              <img src={`/bandicons/${strategy.iconLink}.png`} className="w-full h-full" />
            </div>
            {strategy.name}
            <div className="flex align-baseline flex-row items-center text-white text-[16px]">
              <div className="h-4">
                <img src="Life_Points.webp" className="h-4 object-cover mr-2" />
              </div>
              {strategy.initialHp}
            </div>
          </div>
          <div className="flex items-start flex-col">
            <div
              className="text-sm text-white text-left whitespace-pre-wrap text-[12px] md:text-[15px]"
              dangerouslySetInnerHTML={{
                __html: strategy.effectDesc,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StrategyList;
