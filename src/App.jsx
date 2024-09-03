import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import { PedidoViews } from "./views/PedidoViews";
import { ComprasViews } from "./views/ComprasViews";

function App() {

  const [viewCart, setViewCart] = useState(false);
  const ChageStateViewCart = (val) => {
    setViewCart(val);
  }

  return (
    <><div className="App__Sibebar bg-[#262837] w-full min-h-screen">
      <BrowserRouter >
        <Sidebar setViewCart={ChageStateViewCart} />
          <Routes>
            <Route path="/Compras" element={<ComprasViews />} />
            <Route path="/" element={<PedidoViews viewCart={viewCart} />} />
          </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
