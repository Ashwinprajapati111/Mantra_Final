import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";

function Navbar() {
  const menu = [
    { title: "Home", link: "" },
    { title: "About us", link: "" },
    { title: "My work", link: "" },
	{ title: "Blog", link: "" },
	{ title: "Contact Us", link: "" }
  ];
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef} className="mynav">
		{
			menu.map((a)=>{
				return (
					<>
					 <a href="/#">{a.title}</a>
					</>
				)
			})
		}
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
    </header>
  );
}

export default Navbar;
