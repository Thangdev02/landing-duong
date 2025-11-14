import { useState, useEffect } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroScreen from "./IntroScreen";
import FloatingRobot from "./components/FloatingRobot";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AchievementDetail from "./pages/AchievementDetail";
import MyStory from "./pages/MyStory";
import ProjectDetail from "./pages/ProjectDetail";

function AppContent() {
  const [cookies, setCookie] = useCookies(["intro_seen"]);
  const [showIntro, setShowIntro] = useState(!cookies.intro_seen);

  useEffect(() => {
    if (cookies.intro_seen) setShowIntro(false);
  }, [cookies]);

  const handleFinishIntro = () => {
    setCookie("intro_seen", true, { path: "/", maxAge: 60 * 60 * 24 * 30 }); // 30 ngày
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <IntroScreen onFinish={handleFinishIntro} />
      ) : (
        <>
          <HomePage />
          <FloatingRobot />
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <CookiesProvider>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/achievement/:id" element={<AchievementDetail />} />
          <Route path="/my-story" element={<MyStory />} />
          <Route path="/projectDetail/:title" element={<ProjectDetail />} />
          </Routes>
      </Router>
    </CookiesProvider>
  );
}
