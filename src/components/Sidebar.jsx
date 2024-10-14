import { Home, Settings, UserPlus, Users } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-white-700">
      <div className="flex items-center justify-center h-16 border-b border-gray-50 dark:border-gray-50">
        <span className="text-2xl font-bold text-stone-700 dark:text-stone-900">
          KYC Dashboard
        </span>
      </div>
      <nav className="flex-grow">
        <ul className="px-4 py-4 space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 text-stone-900  hover:bg-stone-200 dark:hover:bg-stone-100 rounded-md"
            >
              <Home className="w-5 h-5 mr-3" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/customers"
              className="flex items-center px-4 py-2 text-stone-900  hover:bg-stone-200 dark:hover:bg-stone-100 rounded-md"
            >
              <Users className="w-5 h-5 mr-3" />
              Customers
            </Link>
          </li>
          <li>
            <Link
              to="/customer/new"
              className="flex items-center px-4 py-2 text-stone-900  hover:bg-stone-200 dark:hover:bg-stone-100 rounded-md"
            >
              <UserPlus className="w-5 h-5 mr-3" />
              New Customer
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center px-4 py-2 text-stone-900  hover:bg-stone-200 dark:hover:bg-stone-100 rounded-md"
            >
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
