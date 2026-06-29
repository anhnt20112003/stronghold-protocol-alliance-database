import "./App.css";
import { AiOutlineUp, AiOutlineMenu } from "react-icons/ai";
import packageJson from "../package.json";
import AttributeList from "./components/AttributeList";
import { useState } from "react";
import AllianceList from "./components/AllianceList";
import StrategyList from "./components/StrategyList";
import ShopItemList from "./components/ShopItemList";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const tabs = ["Attributes", "Alliances", "Strategies", "Items"];
  const page = searchParams.get("tab");
  const currentPage = tabs.includes(page ?? "") ? page! : "Attributes";

  const switchTab = (page: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", page);
    setSearchParams(params, { replace: true });
  };

  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);

  return (
    <div className="w-full min-h-screen bg-[#212121] relative">
      <div className="w-full h-[10vh] max-h-14 bg-[#212121] fixed top-0 z-999 flex-row items-center justify-between px-4 hidden sm:flex">
        <div className="flex flex-row items-baseline gap-2">
          <div className="text-white text-2xl">SPA Database</div>
          <div className="text-white text-sm">Version {packageJson.version}</div>
        </div>

        <div className="flex flex-row gap-5 h-full">
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
      <div className="w-full h-[10vh] max-h-14 bg-[#212121] fixed top-0 z-999 flex-row items-center justify-between px-4 flex sm:hidden">
        <div className="flex flex-row items-baseline gap-2">
          <div className="text-white text-lg">SPA Database</div>
          <div className="text-white text-xs">Version {packageJson.version}</div>
        </div>
        <div className="relative">
          <button
            className="w-8 h-8 bg-[#0bd5a5] flex justify-center items-center text-white text-center rounded-md"
            onClick={() => setToggleMobileMenu((prev) => !prev)}
          >
            <AiOutlineMenu />
          </button>
          <div
            className="absolute top-8 right-0 flex-col rounded-md"
            style={{
              display: toggleMobileMenu ? "flex" : "none",
            }}
          >
            {tabs.map((page) => (
              <button
                className="
              flex justify-center items-center
              text-black text-lg px-2 py-1 w-full"
                onClick={() => {
                  if (page !== currentPage) {
                    switchTab(page);
                    setToggleMobileMenu((prev) => !prev);
                  }
                }}
                style={{
                  backgroundColor: page === currentPage ? "#00ffbb" : "#17785f",
                  cursor: page === currentPage ? "default" : "pointer",
                }}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col mt-14">
        {currentPage === "Attributes" && <AttributeList />}
        {currentPage === "Alliances" && <AllianceList />}
        {currentPage === "Strategies" && <StrategyList />}
        {currentPage === "Items" && <ShopItemList />}
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
