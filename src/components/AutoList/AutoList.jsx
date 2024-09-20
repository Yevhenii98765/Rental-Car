import { useSelector } from 'react-redux';
import { selectAuto } from '../../redux/auto/slice';
import { selectFilter } from '../../redux/filters/slice';
import Auto from '../Auto/Auto';
import s from './AutoList.module.css';
import Container from '../Container/Container';

export const AutoList = () => {
  const items = useSelector(selectAuto);
  const filter = useSelector(selectFilter);
  const filteredAuto = items.filter(auto =>
    auto.make.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filteredAuto);

  return (
    <div>
      <Container>
        <ul className={s.list}>
          {filteredAuto.map(item => (
            <Auto key={item.id} item={item} />
          ))}
        </ul>
      </Container>
    </div>
  );
};
export default AutoList;
