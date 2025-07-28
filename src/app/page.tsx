import { Metadata } from "next";
import Navbar from "./Pages/components/Navbar/view";
import Footer from "./Pages/components/Footer/view";
import Dashboard from "./Pages/Dashboard/view";

export const metadata = {
  title: "Dashboard | ADmyBRAND AI Suite",
  description: "Manage your AI-powered marketing tools from the dashboard.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Dashboard */}
      <Dashboard />

      {/* Footer */}
      <Footer />
    </main>
  );
}
