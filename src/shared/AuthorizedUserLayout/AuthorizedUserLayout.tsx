import { Layout } from '../Layout/Layout.tsx';
import { Outlet } from 'react-router-dom';

export const AuthorizedUserLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
