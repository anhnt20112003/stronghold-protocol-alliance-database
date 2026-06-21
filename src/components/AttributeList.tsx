import AllianceButton from "./AllianceButton";
import TierButton from "./TierButton";
import OperatorCard from "./OperatorCard";
import { operators } from "../data/operators.json";
import type { OperatorDto } from "../dtos/operator.dto";
import { useState } from "react";

const CORE_ALLIANCES = [
  "Yan",
  // "Kazimierz",
  "Aegir",
  "Sargon",
  "Victoria",
  "Kjerag",
  "Laterano",
  // "Siracusa",
];
const ADDITIONAL_ALLIANCES = [
  // "Arcane",
  "Aid",
  "Resilient",
  "Investor",
  "Harmony",
  "Marvel",
  "Precision",
  "Raid",
  "Agile",
  // "Solo",
  "Durable",
  // "Elite",
  "Swift",
  "Foresight",
  "Assist_Operator",
];

const AttributeList = () => {
  const [activeCoreAlliances, setActiveCoreAlliances] = useState<string[]>([]);
  const [activeAddAlliances, setActiveAddAlliances] = useState<string[]>([]);
  const [activeTiers, setActiveTiers] = useState<number[]>([]);

  const toggleCoreAlliance = (alliance: string) => {
    if (activeCoreAlliances.includes(alliance))
      setActiveCoreAlliances((prev) => prev.filter((item) => item !== alliance));
    else setActiveCoreAlliances((prev) => [...prev, alliance]);
  };

  const toggleAddAlliance = (alliance: string) => {
    if (activeAddAlliances.includes(alliance))
      setActiveAddAlliances((prev) => prev.filter((item) => item !== alliance));
    else setActiveAddAlliances((prev) => [...prev, alliance]);
  };

  const toggleTiers = (tier: number) => {
    if (activeTiers.includes(tier)) setActiveTiers((prev) => prev.filter((item) => item !== tier));
    else setActiveTiers((prev) => [...prev, tier]);
  };

  const operatorList: OperatorDto[] = operators;

  const filteredList = operatorList.filter(
    (op) =>
      activeCoreAlliances.every((a) => op.alliances.includes(a)) &&
      activeAddAlliances.every((a) => op.alliances.includes(a)) &&
      (activeTiers.length === 0 || activeTiers.includes(op.tier)),
  );
  return (
    <>
      <div className="flex flex-col my-3 mx-4 gap-3 items-center">
        <div className="px-[15vw] flex flex-row flex-wrap gap-3 justify-center">
          {[1, 2, 3, 4, 5, 6].map((tier) => (
            <TierButton
              key={tier}
              tier={tier}
              onClick={() => toggleTiers(tier)}
              isActive={activeTiers.includes(tier)}
            />
          ))}
        </div>
        <div className="px-[10vw] flex flex-row flex-wrap gap-3 justify-center">
          {CORE_ALLIANCES.map((alliance) => (
            <AllianceButton
              allianceName={alliance}
              key={alliance}
              isActive={activeCoreAlliances.includes(alliance)}
              onClick={() => toggleCoreAlliance(alliance)}
            />
          ))}
        </div>
        <div className="px-[10vw] flex flex-row flex-wrap gap-3 justify-center">
          {ADDITIONAL_ALLIANCES.map((alliance) => (
            <AllianceButton
              allianceName={alliance}
              key={alliance}
              isActive={activeAddAlliances.includes(alliance)}
              onClick={() => toggleAddAlliance(alliance)}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-6 mb-6 gap-6">
        {filteredList.map((operator) => (
          <OperatorCard operator={operator} />
        ))}
      </div>
    </>
  );
};

export default AttributeList;
