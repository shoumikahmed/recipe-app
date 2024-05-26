import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";

export default function Mainlayout() {
  return (
    <section className="bg-gray-300">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
}
