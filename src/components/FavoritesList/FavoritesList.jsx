import { useSelector } from 'react-redux';
import Auto from '../Auto/Auto';

function isLiked(id) {
  let isLiked = JSON.parse(localStorage.getItem('isLiked')) || [];
  return isLiked.includes(id);
}

export const FavoritesList = () => {
  const auto = useSelector(state => state.auto.items);
  const favoriteCars = auto.filter(car => isLiked(car.id));
  return (
    <div>
      <h2>Favorite Cars</h2>
      <ul>
        {favoriteCars.map(car => (
          <Auto key={car.id} item={car} />
        ))}
      </ul>
    </div>
  );
};
export default FavoritesList;
