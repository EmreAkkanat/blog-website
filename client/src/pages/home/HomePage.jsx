import React from "react";

import MainLayout from "../../components/MainLayout";
import Articles from "./container/Articles";
import Hero from "./container/Hero";
import CTA from "./container/CTA";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
