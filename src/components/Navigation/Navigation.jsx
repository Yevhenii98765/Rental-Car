import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && 'activeNavLink');
  };
  return (
    <div>
      <header>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="catalog">
          Catalog
        </NavLink>
        <NavLink className={buildLinkClass} to="favorites">
          Favorites
        </NavLink>
      </header>
    </div>
  );
};
export default Navigation;
