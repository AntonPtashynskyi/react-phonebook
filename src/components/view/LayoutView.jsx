import { Outlet } from 'react-router-dom';
import { Wrapper } from 'components/component/styles/Wrapper.styles';
import { Navigation } from 'components/component/Navigation/Navigation';

export const LayoutView = () => {
  return (
    <Wrapper>
      <Navigation />
      <Outlet />
    </Wrapper>
  );
};
