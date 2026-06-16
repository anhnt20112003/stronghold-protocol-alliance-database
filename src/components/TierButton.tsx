type AllianceButtonProps = {
  tier: number;
  isActive?: boolean;
  onClick?: () => void;
};

const ROMAN_NUMERALS: Record<number, string> = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
};

function TierButton(props: AllianceButtonProps) {
  const { tier, isActive = false, onClick = () => {} } = props;
  return (
    <button
      className={`
        w-10 h-10 flex justify-center items-center
        border-2 rounded-xl border-gray-600 
        ${isActive ? "bg-[#00ffbb]" : ""}
        ${isActive ? "text-black" : "text-white"}
      `}
      onClick={onClick}
    >
      {ROMAN_NUMERALS[tier]}
    </button>
  );
}

export default TierButton;
