import AutoList from '../../components/AutoList/AutoList';
import SearchBox from '../../components/SearchBox/SearchBox';
import SearchLease from '../../components/SearchLease/SearchLease';

export const CatalogPage = () => {
  return (
    <div>
      <SearchLease />
      <SearchBox />
      <AutoList />
    </div>
  );
};
export default CatalogPage;
