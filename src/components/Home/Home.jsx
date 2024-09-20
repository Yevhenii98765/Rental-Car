import { NavLink } from 'react-router-dom';
import s from './Home.module.css';
export const Home = () => {
  return (
    <div>
      <div className={s.iner}>
        <h2 className={s.title}>Welcome to the car rental website</h2>
        <p className={s.text}>We offer you to browse the catalog of goods</p>
        <NavLink className={s.btn_home} to="catalog">
          Catalog
        </NavLink>
      </div>
    </div>
  );
};
export default Home;
