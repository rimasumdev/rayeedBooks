import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function App() {
  return (
    <>
      <Helmet>
        <title>Rayeed Book Store</title>
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
