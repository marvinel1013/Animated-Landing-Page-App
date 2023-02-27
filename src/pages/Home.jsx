import React from "react";
import HomeCloud from "../components/HomeCloud";
import HomeHero from "../components/HomeHero";
import HomeRecovery from "../components/HomeRecovery";

function Home() {
  return (
    <div>
      <HomeHero />
      <HomeRecovery />
      <HomeCloud />
    </div>
  );
}

export default Home;
