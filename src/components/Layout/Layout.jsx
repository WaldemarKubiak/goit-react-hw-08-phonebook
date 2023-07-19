import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import c from './Layout.module.css';

// export const Layout = ({ children }) => {
export const Layout = () => {
  return (
    <div className={c.container}>
      {/* <Suspense fallback="{<div>Loading...</div>}"> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
