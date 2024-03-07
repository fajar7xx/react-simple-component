import NavbarLogo from "./NavbarLogo";

const Navbar = ({ children }) => {
  return (
    <>
      <nav className="nav-bar">
        <NavbarLogo />
        {children}
      </nav>
    </>
  );
};

export default Navbar;
