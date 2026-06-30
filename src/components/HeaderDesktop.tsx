import Select from "./Select";

interface HeaderProps {
  currentPage: string;
  currentSeason: string;

  switchTab: (tab: string) => void;
  switchSeason: (season: string) => void;
}

const HeaderDesktop = (props: HeaderProps) => {
  const { currentPage, currentSeason, switchTab, switchSeason } = props;
  const tabs = ["Attributes", "Alliances", "Strategies", "Items"];

  const seasonSelectOptions = [
    {
      value: "1",
      title: "First Season",
    },
    {
      value: "2",
      title: "Second Season",
    },
    {
      value: "2.1",
      title: "Second Season (Patched)",
    },
  ];

  return (
    <div className="w-full h-[10vh] max-h-14 bg-[#212121] fixed top-0 z-999 flex-row items-center justify-between px-4 hidden sm:flex">
      <div className="flex flex-row items-baseline gap-2">
        <div className="text-white text-2xl">SPA Database</div>
        <div className="text-white text-xl">by Silverglow</div>
      </div>

      <div className="flex flex-row gap-5 h-full">
        <div className="flex justify-center items-center">
          <Select options={seasonSelectOptions} value={currentSeason} onChange={switchSeason} />
        </div>
        {tabs.map((tab) => (
          <button
            className="
              flex justify-center items-center
              text-black text-lg px-2 h-full"
            onClick={() => (tab === currentPage ? {} : switchTab(tab))}
            style={{
              backgroundColor: tab === currentPage ? "#00ffbb" : "#212121",
              cursor: tab === currentPage ? "default" : "pointer",
              color: tab === currentPage ? "black" : "white",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeaderDesktop;
