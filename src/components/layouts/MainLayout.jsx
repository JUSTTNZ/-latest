import { Outlet } from 'react-router-dom';
import Header from '../Header';

function MainLayout() {
  return (
    <>
      <Header />
      <div className='max-w-4xl mx-auto p-4'>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
