import { useState, useEffect } from "react"
import { CookiesProvider, useCookies } from "react-cookie"
import HomePage from "./HomePage"
import IntroScreen from "./IntroScreen"
import FloatingRobot from "./components/FloatingRobot"

function AppContent() {
  const [cookies] = useCookies(["intro_seen"])
  const [showIntro, setShowIntro] = useState(!cookies.intro_seen)

  useEffect(() => {
    if (cookies.intro_seen) setShowIntro(false)
  }, [cookies])

  return (
    <>
      {showIntro ? (
        <IntroScreen onFinish={() => setShowIntro(false)} />
      ) : (
        <>
          <HomePage />
          <FloatingRobot /> 
        </>
      )}
    </>
  )
}

export default function App() {
  return (
    <CookiesProvider>
      <AppContent />
    </CookiesProvider>
  )
}
