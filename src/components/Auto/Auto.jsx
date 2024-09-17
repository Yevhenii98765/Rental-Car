import s from './Auto.module.css';

export const Auto = ({ item }) => {
  return (
    <div>
      <li className={s.list_style}>
        <img src={item.img} alt="" width={287} height={286} />
        <div className={s.wrap_info}>
          <h1>{item.make}</h1>
          <h1>{item.model}</h1>
          <h1>{item.year}</h1>
          <h1>{item.rentalPrice}</h1>
        </div>
        <div>
          <p>{item.address}</p>
          <p>{item.rentalCompany}</p>
          <p>{item.type}</p>
          <p>{item.make}</p>
          <p>{item.mileage}</p>
          <p>{item.accessories}</p>
        </div>
        <button className={s.btn_car}>learn more</button>
      </li>
    </div>
  );
};
export default Auto;
