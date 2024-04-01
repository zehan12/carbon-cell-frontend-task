import { Link, useLocation } from "react-router-dom";
import { cn } from "../../utils/general.utils";

export const MobileMenu = ({
  isMobileMenuOpen,
  setMobileMenuOpen,
  menuItems,
}: MobileMenuProps) => {
  const location = useLocation();
  return (
    <nav className="lg:hidden md:hidden bg-white border-gray-200 dark:bg-zinc-900 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center">
          <img src="/assets/carbonCell.png" className="h-10 mr-3" alt="Logo" />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 bg-zinc-800 focus:ring-gray-600"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={cn(
            "w-full md:block md:w-auto",
            isMobileMenuOpen ? "block" : "hidden"
          )}
        >
          <ul className="font-medium flex flex-col justify-center gap-3 p-4 md:p-0 mt-4 border rounded-lg bg-gray-900 border-gray-700">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 py-2 pl-3 pr-4 text-white rounded",
                    location.pathname === item.path
                      ? "bg-slate-300/25 text-white"
                      : ""
                  )}
                  aria-current="page"
                >
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
