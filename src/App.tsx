import "./App.css";

import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header
        name="Zhansaya"
        role="Aspiring Web Developer"
      />

      <ProfileCard
        name="Zhansaya"
        role="Aspiring Web Developer"
        avatarUrl="/profile.jpg"
      />

      <Footer text="© 2026 Zhansaya" />
    </>
  );
}

export default App;