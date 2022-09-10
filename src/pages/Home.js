import React from "react";
import Main from "../components/main/Main";
import Footer from "../layout/footer/Footer";
import MobileFooter from "../layout/footer/MobileFooter";
import Header from "../layout/header/Header";
import MobileHeader from "../layout/header/MobileHeader";

function Home(props) {
  return (
    <div className="home_page">
      <Header />
      <MobileHeader />
      <Main />
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default Home;
