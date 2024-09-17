import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';

export const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ marginBottom: '50px' }}>
      <input
        type="text"
        onChange={e => dispatch(setFilter(e.target.value))}
        placeholder="Search"
      />
    </div>
  );
};
export default SearchBox;
