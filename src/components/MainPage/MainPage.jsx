
import { ThemeProvider } from 'styled-components'
import '../../index.css'
import { darkTheme, lightTheme } from '../../Utils/Theme.jsx';
import { useState} from 'react'
import Sidebar from '../Sidebar.jsx';
import styled from 'styled-components';
import {Outlet} from "react-router-dom"
import Footer from '../Footer.jsx';

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const SidebarWrapper = styled.div`
  width: 20%;
  min-width: 250px;
  height: 100vh;
  
  @media (max-width: 768px) {
    width: 0;
    min-width: 0;
  }
`;

const MainContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  color:${({ theme }) => theme.text_primary};
  text-align:center;
`;
const MainPage = () => {
    const [darkMode, setDarkMode] = useState(false);

      // Toggle dark mode function to pass to Sidebar
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

  return (
    <div>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
       <Container>
          <SidebarWrapper>
           <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </SidebarWrapper>
          <MainContainer>
            <Outlet/>
          </MainContainer>
       </Container>
       {/* <Footer/> */}
     </ThemeProvider> 
    </div>
  )
}

export default MainPage
