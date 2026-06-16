import { useState } from "react";
import "./App.css";
import AllianceButton from "./components/AllianceButton";
import TierButton from "./components/TierButton";
import OperatorCard from "./components/OperatorCard";
import operatorData from "./data/operators.json";
import type { OperatorDto } from "./dtos/operator.dto";
import { AiOutlineUp } from "react-icons/ai";
import packageJson from "../package.json";

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

function App() {
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

  const operatorList: OperatorDto[] = operatorData.operators;

  const filteredList = operatorList.filter(
    (op) =>
      activeCoreAlliances.every((a) => op.alliances.includes(a)) &&
      activeAddAlliances.every((a) => op.alliances.includes(a)) &&
      (activeTiers.length === 0 || activeTiers.includes(op.tier)),
  );

  return (
    <div className="w-full min-h-screen bg-[#212121] relative">
      <div className="w-full h-[10vh] max-h-14 bg-[#212121] fixed top-0 z-999 flex flex-row items-center justify-between px-4">
        <div className="flex flex-row items-baseline gap-2">
          <div className="text-white text-2xl">SPA Database</div>
          <div className="text-white text-sm">Version {packageJson.version}</div>
        </div>

        <div className="flex flex-row gap-5">
          <div
            className="
            bg-[#00ffbb] rounded-md flex
            justify-center items-center
            text-black text-lg px-2 py-1"
          >
            Attributes
          </div>
          <div
            className="
            bg-[#25be9896] rounded-md flex
            justify-center items-center
            text-black text-lg px-2 py-1"
          >
            Alliances
          </div>
          <div
            className="
            bg-[#25be9896] rounded-md flex
            justify-center items-center
            text-black text-lg px-2 py-1"
          >
            Items
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col mt-14">
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
      </div>
      <div className="fixed bottom-5 right-5 z-999">
        <button
          className="w-8 h-8 bg-[#0bd5a5] flex justify-center items-center text-white text-center rounded-md"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <AiOutlineUp />
        </button>
      </div>
    </div>
  );
}

export default App;
