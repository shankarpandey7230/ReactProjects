import { NavLink } from 'react-router-dom';
import Newsletter from '../pages/Newsletter';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <span className="logo">Cocktails Drinks</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
