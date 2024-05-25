import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";

export default function Mainlayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
