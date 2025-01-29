'use client'

import Navbar from "./components/navbar/NavBar";
import HomeBanner from "./components/homebanner/HomeBanner";
import HotProducts from "./components/products/HotProducts";
import BestRaffles from "./components/products/BestRaffles";
import TopProducts from "./components/products/TopProducts";
import Footer from "./components/footer/Footer";
import CategoriesBar from "./components/categoriesbar/CategoriesBar";
import PartnerSection from "./components/partners/PartnersSection";

export default function Home() {

  return (
    <div className="min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* New Category Bar */}
      <CategoriesBar />

      {/* Home Banner */}
      <HomeBanner />

      {/* Hot Products Section */}
      <HotProducts />

      {/* Partners Section */}
      {/* <PartnerSection /> */}

      {/* Best Raffles Section */}
      {/* <BestRaffles /> */}

      {/* Top Products Section */}
      <TopProducts />

      {/* Footer */}
      <Footer />
      
    </div>
  );
}