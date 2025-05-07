import "./App.css";
import Navbar from "./components/templates/Navbar";
import { Routes, Route } from "react-router-dom";
import Charts from "./pages/Charts";
import InfoBoard from "./pages/InfoBoard";
import NoMatch from "./components/templates/NoMatch";
import Footer from "./components/templates/Footer";

import AirQualitySearch from "./components/cards/AirQualitySearch";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="search-wrapper">
          <AirQualitySearch />
        </section>
        <Routes>
          <Route path="/" element={<InfoBoard />} />
          <Route path="/infoboard" element={<InfoBoard />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
