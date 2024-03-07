const NavbarSearchCountResult = ({animes}) => {
  return (
    <p className="search-results">
      Found <strong>{animes.length}</strong> results
    </p>
  );
};

export default NavbarSearchCountResult;

