import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};
export default Layout;
