import { useEffect, useState } from "react";
import { shopitems } from "../data/season1/items.json";

type ShopItemDto = {
  iconLink: string;
  itemName: string;
  effectDesc: string;
  cost: number;
  tier: number;
};

const mumuballCombinations: Record<string, string[]> = {
  yanship: ["Yanese Dagger"],
  victoriaship: [
    "Victorian Hammer",
    "Burning Victorian Hammer",
    "Durable Victorian Hammer",
    "Speedy Victorian Hammer",
    "Frightening Victorian Hammer",
  ],
  egirship: ["Ægirian Blade"],
  steadship: ["Durable Shield"],
  sargonship: ["Sargonian Teaspresso"],
  indomship: ["Tough Launcher"],
  lateranoship: ["Lateran Clip"],
  kjeragship: ["Kjeragi Nevermeltice"],
  preciship: ["Precision Scope"],
  raidship: ["Raid Grenade"],
  swiftship: ["Quick Combat Rations"],
};

const ShopItemList = () => {
  const items: ShopItemDto[] = shopitems;

  const [victorianHammerIndex, setvictorianHammerIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setvictorianHammerIndex((i) => (i + 1) % mumuballCombinations["victoriaship"].length);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="grid grid-cols md:grid-cols-3 mx-6 mb-6 gap-6">
        {items.map((item) => (
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
                <div className="w-4/5 h-4/5">
                  <img
                    src={`/shopitemicons/${item.iconLink}.png`}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              {item.itemName}
            </div>
            <div className="flex items-start flex-col">
              <div
                className="text-sm text-white text-left whitespace-pre-wrap text-[12px] md:text-[15px]"
                dangerouslySetInnerHTML={{
                  __html: item.effectDesc,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="text-2xl">Damazti Isomorph equipments:</div>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-6 mb-6 mt-6 gap-6">
          {Object.keys(mumuballCombinations).map((key) => {
            const item =
              items.filter((i) =>
                mumuballCombinations[key].find((value) => value === i.itemName),
              ) ?? [];
            return (
              <div className="flex flex-row justify-center items-center gap-6 text-white text-2xl">
                <div className="w-18 h-18 border-3 border-[#25be97] flex justify-center items-center">
                  <div className="w-4/5 h-4/5">
                    <img
                      src={`/shopitemicons/trap_1073_acgarm073.png`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                +
                {item.length === 1 ? (
                  <div className="w-18 h-18 border-3 border-[#25be97] flex justify-center items-center">
                    <div className="w-4/5 h-4/5">
                      <img
                        src={`/shopitemicons/${item[0].iconLink}.png`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-18 h-18 border-3 border-[#25be97] flex justify-center items-center">
                    <div className="w-4/5 h-4/5">
                      <img
                        src={`/shopitemicons/${item[victorianHammerIndex].iconLink}.png`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                )}
                =
                <div className="w-18 h-18 border-3 border-[#25be97] flex justify-center items-center">
                  <div className="w-4/5 h-4/5">
                    <img
                      src={`/bondicons/icon_${key}.png`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShopItemList;
