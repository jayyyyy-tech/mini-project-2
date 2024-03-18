import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import routes from "./routes";
import Navigation from "./components/Navigation";
// import Paging from "./components/Paging";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            />
          );
        })}
      </Routes>
      {/* <Paging /> */}
      <Footer />
    </>
  );
};

export default App;
