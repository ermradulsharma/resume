import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <main style={{ flex: 1, padding: "30px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
