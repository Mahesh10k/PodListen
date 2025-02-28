import { ThemeProvider } from 'styled-components'
import './index.css'
import { darkTheme, lightTheme } from './Utils/Theme.jsx'
import { useState} from 'react'
import Sidebar from './components/Sidebar.jsx';
import { Routes, Route } from "react-router-dom"
import Search from './pages/Search.jsx';
import Favourites from './pages/Favourites.jsx';
import Profile from './pages/Profile.jsx';
import Dashboard from './pages/Dashboard.jsx'
import Upload from './components/Upload.jsx';
import PodcastDetails from "./pages/PodcastDetails.jsx";
import DisplayPodcasts from '../src/pages/DisplayPodcasts.jsx';
import styled from 'styled-components';

// Styled components for layout
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
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  // Toggle dark mode function to pass to Sidebar
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <SidebarWrapper>
          <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </SidebarWrapper>
        <MainContainer>
          <Routes>
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/search' exact element={<Search />} />
            <Route path='/favourites' exact element={<Favourites />} />
            <Route path='/profile' exact element={<Profile />} />
            <Route path='/upload' exact element={<Upload />} />
            <Route path='/podcast/:id' exact element={<PodcastDetails />} />
            <Route path='/showpodcasts/:type' exact element={<DisplayPodcasts />} />
          </Routes>
        </MainContainer>
      </Container>
    </ThemeProvider>
  )
}

export default App