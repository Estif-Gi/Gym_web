import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Dashboard from "../components/dashboard/Dashboard";
import MembersPage from "../components/members/MembersPage";
import BillingPage from "../components/billing/BillingPage";
import PromotionsPage from "../components/promotions/PromotionsPage";
import { initialMembers } from "../data/members";

export default function HomePage() {
    const [activePage, setActivePage] = useState("dashboard");
  
    const renderPage = () => {
      switch (activePage) {
        case "dashboard":
          return <Dashboard members={initialMembers} />;
        case "members":
          return <MembersPage />;
        case "billing":
          return <BillingPage />;
        case "promotions":
          return <PromotionsPage />;
        default:
          return <Dashboard members={initialMembers} />;
      }
    };

    return(
        <>
        <div className="flex h-screen bg-gray-100 font-sans">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-8">
            {renderPage()}
          </main>
        </div>
      </div>
        </>
    )
}