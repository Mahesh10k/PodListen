import LandingPage from "./components/LandingPage/Landpage.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Search from "./pages/Search.jsx";
import Trending from "./pages/Trending.jsx";
import Profile from "./pages/Profile.jsx";
import Upload from "./components/Upload.jsx";
import PodcastDetails from "./pages/PodcastDetails.jsx";
import DisplayPodcasts from "./pages/DisplayPodcasts.jsx";
import SignupForm from "./components/SignUpForm/Signup.jsx";
import LoginForm from "./components/LoginForm/Login.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Unauthorized from "./pages/UnauthorizedPage.jsx";
import ProtectedRoute from "./components/Firebase/ProtectedRoute.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/dashboard" element={<MainPage />}>
          <Route index element={<Dashboard />} />
          <Route path="search" element={<Search />} />
          <Route path="trending" element={<Trending />} />
          <Route path="profile" element={<Profile />} />
          <Route path="upload" element={<ProtectedRoute><Upload /></ProtectedRoute>} />
          <Route path="podcast/:id" element={<PodcastDetails />} />
          <Route path="category/:category" element={<DisplayPodcasts />} />
          <Route path="profile" element={<Profile />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
