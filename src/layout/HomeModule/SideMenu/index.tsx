import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'src/components/Modal';
import { useSendLogoutMutation } from 'src/redux/auth/authApiSlice';
import { GeneralSideMenuData, OtherSideMenuData } from './data';
import SideMenuItem from './SideMenuItem';

import {
  Wrapper,
  LogoWrapper,
  NavWrapper,
  NavListWrapper,
  NavListButton,
  NavListButtonContent,
  NavLogoutIcon,
  NavActionListWrapper,
  NavActionListItem,
  NavActionListItemContent,
  NavActionListItemIcon,
} from './style';

const modalMainText = 'Log out?';
const modalSecondaryText =
  'Are you sure you want to log out from your Medfast account?';
const modalButtonText = 'Log out';

const SideMenu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleModal = () => setIsModalOpen((prev) => !prev);
  const handleCollapse = () => setIsCollapsed((prev) => !prev);

  const [sendLogout, { isSuccess }] = useSendLogoutMutation();

  if (isSuccess) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          mainText={modalMainText}
          secondaryText={modalSecondaryText}
          buttonText={modalButtonText}
          buttonAction={sendLogout}
          hideModal={handleModal}
        />
      )}
      <Wrapper $isCollapsed={isCollapsed}>
        <LogoWrapper to="" $isCollapsed={isCollapsed}>
          <ReactSVG src="/assets/icons/logo.svg" />
          <ReactSVG src="/assets/icons/header.svg" />
        </LogoWrapper>

        <NavWrapper>
          {/* general */}
          <NavListWrapper $isCollapsed={isCollapsed}>
            <h5>General</h5>
            {GeneralSideMenuData.map((item) => (
              <SideMenuItem
                key={uuidv4()}
                title={item.title}
                icon={item.icon}
                path={item.path}
                isCollapsed={isCollapsed}
              />
            ))}
          </NavListWrapper>

          {/* other */}
          <NavListWrapper $isCollapsed={isCollapsed}>
            <h5>Other</h5>
            {OtherSideMenuData.map((item) => (
              <SideMenuItem
                key={uuidv4()}
                title={item.title}
                icon={item.icon}
                path={item.path}
                isCollapsed={isCollapsed}
              />
            ))}

            <NavListButton
              type="button"
              onClick={handleModal}
              $isCollapsed={isCollapsed}
              to="#0"
            >
              <NavListButtonContent $isCollapsed={isCollapsed}>
                <NavLogoutIcon>
                  <ReactSVG src="/assets/icons/menu/logout.svg" />
                </NavLogoutIcon>
                <span>Logout</span>
              </NavListButtonContent>
            </NavListButton>
          </NavListWrapper>

          {/* actions */}
          <NavActionListWrapper $isCollapsed={isCollapsed}>
            <NavActionListItem
              type="button"
              onClick={handleCollapse}
              $isCollapsed={isCollapsed}
              to="#0"
            >
              <NavActionListItemContent $isCollapsed={isCollapsed}>
                <NavActionListItemIcon>
                  <ReactSVG
                    src={`/assets/icons/menu/${
                      isCollapsed ? 'collapseOn' : 'collapseOff'
                    }.svg`}
                  />
                </NavActionListItemIcon>
                <span>Collapse</span>
              </NavActionListItemContent>
            </NavActionListItem>
          </NavActionListWrapper>
        </NavWrapper>
      </Wrapper>
    </>
  );
};

export default SideMenu;
