import classes from "./Layout.module.css";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Services from "../Pages/Services/Services";
import Gallery from "../Pages/Gallery/Gallery";
import Error from "../Pages/Error/Error";
import { Fragment } from "react";
import Footer from "../Pages/Footer/Footer";
import Project from "../Pages/Projects/Project/Project";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FAQ from '../Pages/FAQ/FAQ'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/FAQ",
    element: <FAQ />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
 
  {
    path: "/projects",
    element: <Projects />,
  },
 
  
  {
    path: "/project/:id",
    element: <Project />,
  },
  
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
const Layout = () => {
  return (
    <Fragment>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.content}>
        <RouterProvider router={router} />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
