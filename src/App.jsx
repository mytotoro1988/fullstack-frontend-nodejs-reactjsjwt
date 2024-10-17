import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import axios from "./util/axios.customize";
import { useEffect } from "react";
import { onFCP } from "web-vitals";

// Measure and log FCP as soon as it's available.
onFCP(console.log);

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
