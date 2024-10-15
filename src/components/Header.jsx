import { Button } from "@/components/ui/button";
import { LogOut, Menu, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../Mutations/useLogout";
import SpinnerMini from "./SpinnerMini";
function Header() {
  const { isLoggingOut, logout } = useLogout();
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white dark:bg-slate-800 border-b border-gray-50 dark:border-gray-50">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="md:hidden mr-2">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <div className="flex items-center space-x-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/account")}
        >
          <User className="h-5 w-5" />
          <span className="sr-only">User menu</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={logout}
          disabled={isLoggingOut}
        >
          {!isLoggingOut ? <LogOut className="h-5 w-5" /> : <SpinnerMini />}
          <span className="sr-only">Sign Out</span>
        </Button>
      </div>
    </header>
  );
}

export default Header;
