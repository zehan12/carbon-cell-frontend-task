import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  AreaChart,
  Bell,
  Bitcoin,
  EllipsisVertical,
  HelpCircle,
  Home,
  Search,
  Settings,
  Wallet,
} from "lucide-react";
import { cn } from "../../utils/general.utils";
import { NavLink, useLocation } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

const SideBar = () => {
  const location = useLocation();
  const [isExpanded, setExpanded] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleToggle = () => {
    return setExpanded(!isExpanded);
  };

  const handleUnhandledFeatures = () => {
    return toast("Feature not implemented!", {
      icon: "⚠️",
    });
  };

  return (
    <>
      <div
        className={cn(
          "hidden lg:block md:block h-screen p-5 transition-width duration-300 ease-in-out bg-zinc-900/95",
          isExpanded ? "w-20" : "w-80"
        )}
        style={{ position: "sticky", top: 0 }}
      >
        <div className="flex justify-between items-center opacity-100 transition-opacity duration-300 ease-in-out">
          {!isExpanded && (
            <img
              style={{ maxHeight: "40px" }}
              src="/assets/carbonCell.png"
              alt="logo"
            />
          )}
          <button
            className={cn(
              "h-10 w-10 rounded-full text-white bg-zinc-800 hover:bg-zinc-700 cursor-pointer rotate-90",
              isExpanded ? "transition-transform duration-75 ease-out" : ""
            )}
            onClick={handleToggle}
          >
            |||
          </button>
        </div>
        <div>
          <div
            className={cn(
              "flex gap-2 items-center w-10 h-10 mt-10 text-3xl cursor-pointer text-white bg-zinc-700 hover:bg-zinc-300/25 rounded-md transition-width duration-300 ease-linear",
              isExpanded
                ? "w-full justify-center"
                : " pl-3 w-60 justify-start gap-5"
            )}
          >
            <Search size={20} />
            {isExpanded ? "" : <div className="text-sm">Search</div>}
          </div>
          <div className="mt-8 space-y-4 cursor-pointer">
            {menuItems.map((item) => (
              <NavLink
                to={item.path}
                key={item.label}
                className={cn(
                  "flex gap-2 items-center w-full h-10 text-3xl text-gray-400 hover:bg-slate-300/25 rounded-md transition-width duration-300 ease-linear",

                  isExpanded ? "justify-center" : "pl-3 justify-start gap-5",
                  location.pathname === item.path
                    ? "bg-slate-300/25 text-white"
                    : ""
                )}
              >
                {item.icon}
                {isExpanded ? (
                  ""
                ) : (
                  <div className="w-full text-sm">{item.label}</div>
                )}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-end h-96 mt-10">
          <div className="flex flex-col gap-4 p-2 text-gray-300 text-md">
            {options.map((item) => (
              <div
                onClick={handleUnhandledFeatures}
                key={item.name}
                className={cn(
                  "flex justify-between cursor-pointer rounded-md hover:bg-zinc-600 p-2",
                  isExpanded ? "w-9" : "w-full"
                )}
              >
                <div className="flex justify-start gap-2">
                  <item.icon size={20} />
                  {!isExpanded && <div>{item.name}</div>}
                </div>
                {item.current && (
                  <div
                    className={`w-2 h-2 rounded-full bg-lime-500 ${
                      isExpanded ? "fixed" : "hidden"
                    }`}
                  />
                )}

                {item.count && !isExpanded && (
                  <span
                    className="ml-auto w-9 min-w-max whitespace-nowrap rounded-md bg-lime-500 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-black"
                    aria-hidden="true"
                  >
                    {item.count}
                  </span>
                )}
              </div>
            ))}
          </div>
          {!isExpanded && (
            <div className="flex items-center gap-4 p-3 my-3 rounded-md bg-zinc-600/25 text-white">
              <img
                className="w-10 h-10 rounded-full"
                src="https://avatars.githubusercontent.com/u/73664886?v=4"
              />
              <div>
                <h4 className="text-sm font-sans font-normal">Zehan Khan</h4>
                <p className="text-xs text-gray-300">zehan9211@gmail.com</p>
              </div>
              <EllipsisVertical />
            </div>
          )}
        </div>
      </div>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        menuItems={menuItems}
      />
    </>
  );
};

const menuItems = [
  { icon: <Home />, path: "/home", label: "Home" },
  {
    icon: <AreaChart size={28} />,
    path: "/population",
    label: "Graph Population",
  },
  {
    icon: <Bitcoin size={28} />,
    path: "/crypto-currency",
    label: "Crypto Currency Prices",
  },
  { icon: <Wallet size={28} />, path: "/wallet", label: "MetaMask Wallet" },
];

const options = [
  { name: "Notification", icon: Bell, count: "12", current: true },
  { name: "Support", icon: HelpCircle, current: false },
  { name: "Settings", icon: Settings, current: false },
];

export default SideBar;
