import '../../index.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Wrapper } from 'components/component';

export const LayoutView = () => {
  return (
    <Wrapper>
      <div>
        <nav>
          <NavLink to="/" className="link">
            Phone Book
          </NavLink>
          <NavLink to="contacts" className="link">
            Contacts
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </Wrapper>
  );
};
