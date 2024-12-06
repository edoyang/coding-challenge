import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Revenue from "./pages/Revenue";
import Expenses from "./pages/Expenses";
import GPM from "./pages/GPM";
import NPM from "./pages/NPM";
import WCR from "./pages/WCR";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Revenue} />
        <Route path="/revenue" Component={Revenue} />
        <Route path="/expenses" Component={Expenses} />
        <Route path="/gpm" Component={GPM} />
        <Route path="/npm" Component={NPM} />
        <Route path="/wcr" Component={WCR} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
