import { useState } from "react";

import type { OperatorDto } from "../dtos/operator.dto";
import { getOperatorsBySeason } from "../utils/getDataBySeason";
import OperatorCard from "../components/OperatorCard";



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

const OperatorFilter = {
  RANK: 'Rank',
  PASSIVE: 'Passive',
};

const Passive = {
  CAN_STACK: {
    name: 'Can stack',
    explanation: 'Can accumulate stacks for certain Alliances when listed conditions are met'
  },
  COMBAT: {
    name: 'Combat',
    explanation: 'Increases combative abilities'
  },
  PREP: {
    name: 'Prep',
    explanation: 'Effects that increase Fund gain or obtained Operators'
  },
  ONE_TIME: {
    name: 'One-time',
    explanation: 'Single-use effects that provide stacks when the Operator is bought'
  }
} as const;

type AttributeListProps = {
  season: string;
};

const OperatorList = ({ season }: AttributeListProps) => {
  const operatorData: OperatorDto[] = getOperatorsBySeason(season);
  const [filterBy, setFilterBy] = useState(OperatorFilter.RANK);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-8">
      {/* Tabs */}
      <div className="flex flex-wrap gap-x-2 my-4">
        <p>Filter By: </p>
        {Object.entries(OperatorFilter).map(([_, tab]) => {
          return (
            <button
              className={`
                cursor-pointer
                ${filterBy === tab ? 'text-[#0bd5a5]' : 'text-white'}
              `}
              onClick={() => setFilterBy(tab)}
            >{tab}</button>)
        })}
        {/* {filterBy === OperatorFilter.ALLIANCE && <Home />} */}

      </div>
      <div className="flex flex-col gap-y-8">
        {/* By Rank */}
        {filterBy === OperatorFilter.RANK && Object.entries(ROMAN_NUMERALS).map(item => {
          const [tier, rank] = item;
          const filteredOps = operatorData.filter((op) => op.tier === parseInt(tier));
          const color = TIER_COLOR[parseInt(tier)];
          return (
            <div key={tier}>
              <div 
                className="flex flex-col items-start text-left"
              >
                <p className="text-2xl text-white">Rank { rank }</p>
                <p>(shows up in Dispatch Center Level { tier })</p>
              </div>
              <hr className="my-4 border-t-4" style={{ borderColor: color }} />
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {filteredOps.map((op) => {
                  return (
                    <div 
                      key={op.name} 
                      className="py-2 rounded-lg border" 
                      style={{ borderColor: color }}
                    >
                      {/* <OperatorIcon operator={op}></OperatorIcon> */}
                      <OperatorCard operator={op} />
                    </div>
                  )
                })}
              </div>
            </div>
          );
        })}

        {/* By Passive */}
        {filterBy === OperatorFilter.PASSIVE && Object.entries(Passive).map(item => {
          const [_, value] = item;
          const passive = value.name;
          const explanation = value.explanation;
          const filteredOps = operatorData.filter((op) => op.attributeType === passive);
          // const [isShow, setIsShow] = useState(false);
          return (
            <div key={passive}>
              <div 
                className="flex flex-col items-start text-left"
              >
                <p className="text-2xl text-white">{ passive }</p>
                <p>({ explanation })</p>
              </div>
              <hr className="my-4 border-t-4"  />
              <div 
                className="grid lg:grid-cols-3 md:grid-cols-2 gap-4"
                // style={{ display: isShow ? 'block' : 'none' }}
              >
                {filteredOps.map((op) => {
                  return (
                    <div 
                      key={op.name} 
                      className="py-2 rounded-lg border" 
                      // style={{ borderColor: color }}
                    >
                      {/* <OperatorIcon operator={op}></OperatorIcon> */}
                      <OperatorCard operator={op} />
                    </div>
                  )
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
};

export default OperatorList;