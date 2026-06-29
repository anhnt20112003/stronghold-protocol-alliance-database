import AllianceButton from "./AllianceButton";
import TierButton from "./TierButton";
import OperatorCard from "./OperatorCard";
import { operators as season1operators } from "../data/season1/operators.json";
import { operators as season2operators } from "../data/season2/operators.json";
import { bondInfo as season1bonds } from "../data/season1/alliances.json";
import { bondInfo as season2bonds } from "../data/season2/alliances.json";
import type { OperatorDto } from "../dtos/operator.dto";
import { useState } from "react";
import type { AllianceDto } from "../dtos/alliance.dto";

const seasonOperatorData: Record<string, OperatorDto[]> = {
  "1": season1operators,
  "2": season2operators,
} as const;

const seasonBondData: Record<string, AllianceDto[]> = {
  "1": season1bonds,
  "2": season2bonds,
} as const;

type AttributeListProps = {
  season: string;
};

const AttributeList = ({ season }: AttributeListProps) => {
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

  const allianceData: AllianceDto[] = seasonBondData[season];
  const coreAlliances = allianceData.filter((alliance) => alliance.core === true);
  const additionalAlliances = allianceData.filter(
    (alliance) => alliance.core !== true && alliance.noFilter !== true,
  );
  const operatorData: OperatorDto[] = seasonOperatorData[season];

  const filteredList = operatorData.filter(
    (op) =>
      activeCoreAlliances.every((a) => op.alliances.includes(a)) &&
      activeAddAlliances.every((a) => op.alliances.includes(a)) &&
      (activeTiers.length === 0 || activeTiers.includes(op.tier)),
  );

  return (
    <>
      <div className="flex flex-col my-3 mx-4 gap-3 items-center">
        <div className="flex flex-row flex-wrap gap-3 justify-center">
          {[1, 2, 3, 4, 5, 6].map((tier) => (
            <TierButton
              key={tier}
              tier={tier}
              onClick={() => toggleTiers(tier)}
              isActive={activeTiers.includes(tier)}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 flex-wrap gap-3 justify-center">
          {coreAlliances.map((alliance) => (
            <AllianceButton
              allianceName={alliance.name}
              key={alliance.bondId}
              isActive={activeCoreAlliances.includes(alliance.name)}
              onClick={() => toggleCoreAlliance(alliance.name)}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 flex-wrap gap-3 justify-center">
          {additionalAlliances.map((alliance) => (
            <AllianceButton
              allianceName={alliance.name}
              key={alliance.bondId}
              isActive={activeAddAlliances.includes(alliance.name)}
              onClick={() => toggleAddAlliance(alliance.name)}
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
