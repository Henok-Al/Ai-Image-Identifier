import Header from "@/components/header";
import { MainContainer } from "@/components/main-container";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* header section */}
      <Header />
      {/* main container */}
      <MainContainer />
    </div>
  );
};

export default HomePage;
