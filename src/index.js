import React from "react";
import ReactDOM from "react-dom";
import "./i18n";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import MainLayout from "./components/layout/MainLayout";
import AboutPage from "./components/pages/aboutUs/AboutPage";
import ContactPage from "./components/pages/contact/ContactPage";
import ErrorPage from "./components/pages/Error/ErrorPage";
import ProjectDetailsPage from "./components/pages/projectDetails/ProjectDetailsPage";
import ProjectsPage from "./components/pages/projects/ProjectsPage";
import ServicesPage from "./components/pages/service/Serevices";
import ServiceDetails from "./components/pages/ServiceDetails/ServiceDetails";
import CoursesPage from "./components/pages/courses/CoursesPage";
import SingleCourse from "./components/pages/courses/single-course/SingleCourse";
import AdminPanelPage from "./components/pages/adminPanel/AdminPanelPage";
// import LoginPage from "./components/pages/admin-panel/LoginPage";
// import Layout from "./components/App";
// import SecoundLayout from "./components/layout/SecoundLayout";
// import BlogPage from "./components/pages/blog/BlogPage";
// import BlogDetailsPage from "./components/pages/blogDetails/BlogDetailsPage";
// import BlogStandardPage from "./components/pages/blogStandard/BlogStandardPage";
// import CommingSoonPage from "./components/pages/commingSoon/CommingSoonPage";
// import HomePage2 from "./components/pages/Home2/HomePage2";
// import ServicesPage from "./components/pages/service/ServicesPage";

// all css import
import "./index.css";
import { DataProvider } from "./context/DataContext";

//Default Warniing Error Hide
// console.log = console.warn = console.error = () => { };

/*
=>version : 0.1
=>Event : Rendering al content to web
=>Action: define all routes and page
@return HTML
*/

function Root() {
  return (
    <>
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={MainLayout} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-panel`}
            component={AdminPanelPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/about`}
            component={AboutPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/service`}
            component={ServicesPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-details`}
            component={ServiceDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/project`}
            component={ProjectsPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/project-details`}
            component={ProjectDetailsPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact`}
            component={ContactPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/courses`}
            exact
            component={CoursesPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/courses/:card_name`}
            component={SingleCourse}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/courses/js-course`}
            component={SingleCourse}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/courses/react-js-course`}
            component={SingleCourse}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/courses/node-js-course`}
            component={SingleCourse}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/courses/qa-course`}
            component={SingleCourse}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/courses/ui-ux-course`}
            component={SingleCourse}
          />
          <Route path="*" component={ErrorPage} />
          {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/commingsoon`}
            component={CommingSoonPage}
          /> */}
          {/* <Route exact path="/home2" component={SecoundLayout} /> */}
          {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/home2`}
              component={HomePage2}
            /> */}
          {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog`}
              component={BlogPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/Blog-standard`}
              component={BlogStandardPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/Blog-details`}
              component={BlogDetailsPage}
            /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Root;

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <DataProvider>
        <Root />
      </DataProvider>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
