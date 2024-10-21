import { Home, Settings, UserPlus, Users } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-orange-500 text-white">
      <div className="flex items-center justify-center h-16 border-b border-white/20">
        <span className="text-2xl font-bold">QCell KYC SYSTEM</span>
      </div>
      <nav className="flex-grow">
        <ul className="px-4 py-4 space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2  font-semibold hover:bg-white/10 rounded-md transition-colors duration-200"
            >
              <Home className="w-5 h-5 mr-3" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/customers"
              className="flex items-center px-4 py-2  font-semibold hover:bg-white/10 rounded-md transition-colors duration-200"
            >
              <Users className="w-5 h-5 mr-3" />
              Customers
            </Link>
          </li>
          <li>
            <Link
              to="/customer/new"
              className="flex items-center px-4 py-2  font-semibold hover:bg-white/10 rounded-md transition-colors duration-200"
            >
              <UserPlus className="w-5 h-5 mr-3" />
              New Customer
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center px-4 py-2  font-semibold hover:bg-white/10 rounded-md transition-colors duration-200"
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