import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import IntroScreen from "./IntroScreen";
import FloatingRobot from "./components/FloatingRobot";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AchievementDetail from "./pages/AchievementDetail";
import MyStory from "./pages/MyStory";
import ProjectDetail from "./pages/ProjectDetail";
import NotfoundPage from "./pages/NotfoundPage";

export default function App() {
  const hasSeenIntro = sessionStorage.getItem("intro_seen") === "true";

  // Đánh dấu đã xem ngay khi lần đầu mở
  if (!hasSeenIntro) {
    sessionStorage.setItem("intro_seen", "true");
  }

  return (
    <>
      {/* QUAN TRỌNG NHẤT: Phải có key + mode="wait" thì exit mới chạy và unmount đúng */}
      <AnimatePresence mode="wait">
  {!hasSeenIntro && (
    <IntroScreen key="intro-screen" onFinish={() => {}} />
  )}
</AnimatePresence>

      {/* Trang chính - luôn render, chỉ bị che bởi Intro lần đầu */}
      <div className={!hasSeenIntro ? "invisible" : "visible"}><Router>
          <Navigation />
          <Routes>
            {/* <Route path="/" element={<NotfoundPage />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/achievement/:id" element={<AchievementDetail />} />
            <Route path="/my-story" element={<MyStory />} />
            <Route path="/projectDetail/:title" element={<ProjectDetail />} />
          </Routes>
          <FloatingRobot />
        </Router>
      </div>
    </>
  );
}