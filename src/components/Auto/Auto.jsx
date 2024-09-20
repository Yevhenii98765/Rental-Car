import { useDispatch } from 'react-redux';
import Icon from '../Icon/Icon';
import s from './Auto.module.css';
import { toggleLike } from '../../redux/auto/slice';

function isLiked(id) {
  let isLiked = JSON.parse(localStorage.getItem('isLiked')) || [];
  return isLiked.includes(id);
}

export const Auto = ({ item }) => {
  const dispatch = useDispatch();

  const handleLikeToggle = () => {
    dispatch(toggleLike(item.id));
  };
  let likedEl = isLiked(item.id);

  return (
    <div>
      <li className={s.list_style}>
        {likedEl ? (
          <Icon
            onClick={handleLikeToggle}
            width={20}
            height={16}
            name="icon-Vector1"
            className={s.icon_liked}
          />
        ) : (
          <Icon
            width={20}
            height={16}
            name="icon-like"
            className={s.icon_liked_second}
            onClick={handleLikeToggle}
          />
        )}
        <img
          className={s.auto_img}
          src={item.img}
          alt=""
          width={418}
          height={268}
        />

        <div className={s.iner}>
          <div className={s.wrap_info}>
            <div className={s.iner_info}>
              <p>{item.make}</p>
              <p className={s.text_second}>{item.model},</p>
              <p>{item.year}</p>
            </div>
            <p>{item.rentalPrice}</p>
          </div>
          <div className={s.second_info}>
            <div className={s.second_info_wrap}>
              <p className={s.text_first}>{item.address}</p>
              <p className={s.text_first}>{item.rentalCompany}</p>
            </div>
            <div className={s.second_info_wrap_wrap}>
              <p className={s.text_first}>{item.type}</p>
              <p className={s.text_first}>{item.make}</p>
              <p className={s.text_first}>{item.mileage}</p>
            </div>
          </div>
        </div>
        <button className={s.btn_car}>learn more</button>
      </li>
    </div>
  );
};
export default Auto;
