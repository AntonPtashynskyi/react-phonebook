import { NavLink, Outlet } from 'react-router-dom';

export const LayoutView = () => {
  return (
    <>
      <div>
        <nav>
          <NavLink to="/">Phone Book</NavLink>
          <NavLink to="contacts">Contacts</NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
