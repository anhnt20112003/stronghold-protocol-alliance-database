import { bandInfo } from "../data/season1/strategies.json";

type StrategyDto = {
  name: string;
  iconLink: string;
  effectName: string;
  effectDesc: string;
};

const StrategyList = () => {
  const strats: StrategyDto[] = bandInfo;
  return (
    <div className="grid grid-cols sm:grid-cols-3 mx-6 mb-6 gap-6">
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
