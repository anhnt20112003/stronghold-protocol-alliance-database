import { useEffect, useState } from "react";
import { getItemsBySeason } from "../utils/getDataBySeason";

type ShopItemDto = {
  iconLink: string;
  itemName: string;
  effectDesc: string;
  cost: number | null;
  tier: number | null;
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

const mumuballCombinations: Record<string, string[]> = {
  yanship: ["trap_1040_acarm040"],
  victoriaship: [
    "trap_1041_acarm041",
    "trap_1042_acarm042",
    "trap_1043_acarm043",
    "trap_1044_acarm044",
    "trap_1045_acarm045",
  ],
  egirship: ["trap_1046_acarm046"],
  steadship: ["trap_1047_acarm047"],
  sargonship: ["trap_1050_acarm050"],
  indomship: ["trap_1056_acarm056"],
  lateranoship: ["trap_1057_acarm057"],
  kjeragship: ["trap_1062_acarm062"],
  preciship: ["trap_1063_acarm063"],
  raidship: ["trap_1064_acarm064"],
  swiftship: ["trap_1051_acarm051"],
};

type ShopItemListProps = {
  season: string;
};

const ShopItemList = ({ season }: ShopItemListProps) => {
  const items: ShopItemDto[] = getItemsBySeason(season);

  const [victorianHammerIndex, setvictorianHammerIndex] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setvictorianHammerIndex((i) => (i + 1) % mumuballCombinations["victoriaship"].length);
  //   }, 1000);

  //   return () => clearInterval(id);
  // }, []);

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
                className="w-18 h-18 border-3 border-[#25be97] relative"
                // style={{ background: "radial-gradient(#25be97, #212121 80%)" }}
              >
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={`/shopitemicons/${item.iconLink}.png`}
                    className="h-4/5 w-4/5 object-contain"
                  />
                </div>
                {item.tier && (
                  <div
                    className={`
                    absolute w-6 h-6 right-0 top-0 
                    text-sm flex justify-center items-center
                    bg-[#212121]/50 rounded-sm border-2 `}
                    style={{
                      color: TIER_COLOR[item.tier],
                      borderColor: TIER_COLOR[item.tier],
                    }}
                  >
                    {ROMAN_NUMERALS[item.tier]}
                  </div>
                )}
              </div>
              {item.itemName}
            </div>
            <div className="flex items-start flex-col text-sm  text-left whitespace-pre-wrap text-[12px] md:text-[15px]">
              {item.cost && (
                <div className="flex text-[#ffaa00] align-baseline">
                  {item.cost}
                  <img src={"/fund.png"} className="object-contain" />
                </div>
              )}
              <div
                className="text-white"
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
                mumuballCombinations[key].find((value) => value === i.iconLink),
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
