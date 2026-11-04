import { useEffect, useState } from "react";
import { getItemsBySeason } from "../utils/getDataBySeason";

const mumuballCombinationsSeason1: Record<string, string[]> = {
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

const mumuballCombinationsSeason2: Record<string, string[]> = {
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
  siracusaship: ["trap_1121_acarm121"],
  kazimierzship: ["trap_1119_acarm119"],
  indomship: ["trap_1056_acarm056"],
  lateranoship: ["trap_1057_acarm057"],
  kjeragship: ["trap_1062_acarm062"],
  preciship: ["trap_1063_acarm063"],
  raidship: ["trap_1064_acarm064"],
  swiftship: ["trap_1051_acarm051"],
  arcaneship: ["trap_1048_acarm048"],
};

type ShopItemDto = {
  iconLink: string;
  itemName: string;
  effectDesc: string;
  cost: number | null;
  tier: number | null;
};

export default function MumuBallSection(season: string) {
  const [victorianHammerIndex, setvictorianHammerIndex] = useState(0);

  const items: ShopItemDto[] = getItemsBySeason(season);

  const mumuballCombinations =
    season !== "1" ? mumuballCombinationsSeason2 : mumuballCombinationsSeason1;

  useEffect(() => {
    const id = setInterval(() => {
      // console.log(mumuballCombinations["victoriaship"][victorianHammerIndex], "mumu");
      setvictorianHammerIndex((i) => (i + 1) % mumuballCombinations["victoriaship"].length);
    }, 1000);

    return () => clearInterval(id);
  });
  return (
    <div>
      <div className="text-2xl">Damazti Isomorph equipments:</div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-6 mb-6 mt-6 gap-6">
        {Object.keys(mumuballCombinations).map((key) => {
          const item =
            items.filter((i) => mumuballCombinations[key].find((value) => value === i.iconLink)) ??
            [];
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
                      src={`/shopitemicons/${item[victorianHammerIndex]?.iconLink}.png`}
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
  );
}
