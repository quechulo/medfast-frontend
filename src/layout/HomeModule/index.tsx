import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'src/components/Navigation/HomePage';
import SideMenu from './SideMenu';
import Header from './Header';
import homeRoutes from './SideMenu/data';
import { Wrapper, ContentWrapper, HeaderWrapper } from './styles';

const HomeModule: React.FC = () => (
  <Wrapper>
    <SideMenu />
    <ContentWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Routes>
        <Route index element={<div>Index Page after login</div>} />
        {homeRoutes.map((route) => {
          if (route.path === 'dashboard') {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<HomePage />}
              />
            );
          }
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<div>{route.title}</div>}
            />
          );
        })}

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </ContentWrapper>
  </Wrapper>
);

export default HomeModule;
