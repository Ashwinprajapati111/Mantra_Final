import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const menu = [
    { title: "Home", link: "" },
    { title: "About us", link: "" },
    { title: "My work", link: "" },
    { title: "Blog", link: "" },
    { title: "Contact Us", link: "" },
  ];
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

      <header>
        <div className="header_main">
          <h3>LOGO</h3>
          <nav ref={navRef} className="mynav">
            {menu.map((a) => {
              return (
                <>
                  <a href="/#">{a.title}</a>
                </>
              );
            })}
            <a href="/#">
              <button className="mybtn">Log in</button>
            </a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
