import styled from 'styled-components'
import { HomeRounded } from '@mui/icons-material';
import { CloseRounded } from '@mui/icons-material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BackupRoundedIcon from '@mui/icons-material/BackupRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import LogoImage from "../assets/Logo.png"
import { Link } from "react-router-dom"
import { useState } from 'react';

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bgSoft || theme.bg};
  color: ${({ theme }) => theme.text_primary};
  border-right: 1px solid ${({ theme }) => theme.border || 'rgba(0,0,0,0.1)'};
  position: relative;
  
  @media (max-width: 768px) {
    position: fixed;
    left: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
    width: 250px;
    height: 100vh;
    transition: 0.3s ease-in-out;
    z-index: 1000;
    box-shadow: ${({ isOpen }) => (isOpen ? "0 0 15px rgba(0,0,0,0.2)" : "none")};
  }
`;

const MobileOverlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 999;
  }
`;

const MobileToggle = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.bgSoft || theme.bg};
    color: ${({ theme }) => theme.text_primary};
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    z-index: 1001;
    cursor: pointer;
  }
`;

const Elements = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.bgHover || 'rgba(0,0,0,0.05)'};
  }
`;

const NavText = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const Flex = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 16px;
  width: 100%;
`;

const Close = styled.div`
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 4px 0;
`;

const Image = styled.img`
  height: 80px;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.border || 'rgba(0,0,0,0.1)'};
  margin: 10px 0;
`;

const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.text_secondary + '40'};
    border-radius: 5px;
  }
`;

const Sidebar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <MobileToggle onClick={toggleMenu}>
        <MenuIcon />
      </MobileToggle>
      
      <MobileOverlay isOpen={isOpen} onClick={toggleMenu} />
      
      <MenuContainer isOpen={isOpen}>
        <Flex>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>
              <Image src={LogoImage} />
            </Logo>
          </Link>
          <Close onClick={toggleMenu}>
            <CloseRounded />
          </Close>
        </Flex>
        
        <Divider />
        
        <ScrollContainer>
          <Link to='/' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
            <Elements>
              <HomeRounded />
              <NavText>Dashboard</NavText>
            </Elements>
          </Link>
          
          <Link to='/search' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
            <Elements>
              <SearchRoundedIcon />
              <NavText>Search</NavText>
            </Elements>
          </Link>
          
          <Link to='/favourites' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
            <Elements>
              <FavoriteRoundedIcon />
              <NavText>Favourites</NavText>
            </Elements>
          </Link>
          
          <Link to='/upload' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
            <Elements>
              <BackupRoundedIcon />
              <NavText>Upload</NavText>
            </Elements>
          </Link>
          
          <Divider />
          
          <Elements onClick={toggleDarkMode}>
            {darkMode ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            <NavText>{darkMode ? "Light Mode" : "Dark Mode"}</NavText>
          </Elements>
          
          <Elements>
            <ExitToAppRoundedIcon />
            <NavText>Log In</NavText>
          </Elements>
        </ScrollContainer>
      </MenuContainer>
    </>
  )
}

// Menu icon for mobile view
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Sidebar