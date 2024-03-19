import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Books from "./pages/Books";
import Home2 from "./pages/Home2";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    forNavbar: true,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
    forNavbar: true,
  },
  {
    name: "Contact",
    path: "/contact-us",
    element: <Contact />,
    forNavbar: true,
  },
  {
    name: "Books",
    path: "/books/:id",
    element: <Books />,
    forNavbar: false,
  },
  {
    name: "Home2",
    path: "/home2",
    element: <Home2 />,
    forNavbar: false,
  },
];

export default routes;
