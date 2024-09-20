import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && 'activeNavLink');
  };
  return (
    <div>
      <header className={s.iner}>
        <div>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </div>
        <div className={s.wrap_second}>
          <NavLink className={buildLinkClass} to="catalog">
            Catalog
          </NavLink>
          <NavLink className={buildLinkClass} to="favorites">
            Favorites
          </NavLink>
        </div>
      </header>
    </div>
  );
};
export default Navigation;
