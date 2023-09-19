import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WebDev from "./pages/WebDev";
import JavaDev from "./pages/JavaDev";
import MachineLearning from "./pages/MachineLearning";
import DataAnalysis from "./pages/DataAnalysis";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="relative">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-dev" element={<WebDev />} />
          <Route path="/java-dev" element={<JavaDev />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
          <Route path="/data-analysis" element={<DataAnalysis />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
