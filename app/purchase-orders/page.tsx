'use client'

import CategoriesBar from "../components/categoriesbar/CategoriesBar";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/NavBar";
import TopProducts from "../components/products/TopProducts";
import ListPurchaseOrders from "../components/purchase-orders/ListPurchaseOrders";

export default function PurchaseOrders() {

  return (
    <div className="min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* New Category Bar */}
      <CategoriesBar />

      <ListPurchaseOrders />

      {/* Home Banner */}
      {/* <HomeBanner /> */}

      {/* Hot Products Section */}
      {/* <HotProducts /> */}

      {/* Partners Section */}
      {/* <PartnerSection /> */}

      {/* Best Raffles Section */}
      {/* <BestRaffles /> */}

      {/* Top Products Section */}
      {/* <TopProducts /> */}

      {/* Footer */}
      <Footer />
      
    </div>
  );
}