import { Button } from "@/components/ui/button";
import { LogOut, Menu, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../Mutations/useLogout";
import SpinnerMini from "./SpinnerMini";
import { useUser } from "../Queries/useUser";

function Header() {
  const {
    user: {
      user_metadata: { fullName },
    },
  } = useUser();
  const { isLoggingOut, logout } = useLogout();
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-orange-500 text-white">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mr-2 text-white hover:bg-white/10"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <div className="flex items-center space-x-3">
        {fullName ? (
          <span className="hidden md:inline">Welcome back, {fullName}</span>
        ) : (
          ""
        )}
        <Button
          variant="ghost"
          onClick={() => navigate("/account")}
          className="text-white hover:bg-white/10 flex items-center space-x-2 px-3 py-2"
        >
          <User className="h-5 w-5 " />
        </Button>
        <span className="hidden md:inline">LogOut</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={logout}
          disabled={isLoggingOut}
          className="text-white hover:bg-white/10"
        >
          {!isLoggingOut ? <LogOut className="h-5 w-5" /> : <SpinnerMini />}
        </Button>
      </div>
    </header>
  );
}

export default Header;
