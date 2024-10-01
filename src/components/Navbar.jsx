import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom navbar">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            style={{ marginLeft: 20, width: 80 }}
            src="https://img.freepik.com/premium-vector/chef-recipe-logo-design-vector-illustration-white-background_685330-3470.jpg"
          />
        </a>

        <ul style={{ marginRight: 20 }} className="nav nav-pills">
          <li style={{ cursor: "pointer" }} className="nav-item">
            <Link to={"./"} className="nav-link" aria-current="page">
              Home
            </Link>
          </li>
          <li style={{ cursor: "pointer" }} className="nav-item">
            <Link to={"./recipes"} className="nav-link">
              Recipes
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
