import AppBar from "@mui/material/AppBar";
import Toolbar  from '@mui/material/Toolbar';
import Logo from './shared/Logo';
import { useAuth } from "../context/AuthContext";
import NavLink from './shared/NavLink';

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar sx={{ bgcolor: "transparent" , position: "static" , boxShadow: "none"}}>
      <Toolbar sx={{display: "flex"}}>
        <Logo/>
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavLink bg="#F22C8F" to="/chat" text="Go to Chat" textColor="white" />
              <NavLink bg="#8C33FF" to="/" text="logout" textColor="white" onClick={auth.logout} />
            </> 
            ) : (
            <>
              <NavLink bg="#F22C8F" to="/login" text="Login" textColor="white" />
              <NavLink bg="#8C33FF" to="/signup" text="Signup" textColor="white" />
            </>
              
            )
          }
        </div>
      </Toolbar>
      
    </AppBar>
  );
};

export default Header;