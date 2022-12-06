import React from "react";
import ReactDOM from "react-dom";
import './i18n';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import Layout from "./components/App";
import MainLayout from "./components/layout/MainLayout";
import SecoundLayout from "./components/layout/SecoundLayout";
import AboutPage from "./components/pages/aboutUs/AboutPage";
import BlogPage from "./components/pages/blog/BlogPage";
import BlogDetailsPage from "./components/pages/blogDetails/BlogDetailsPage";
import BlogStandardPage from "./components/pages/blogStandard/BlogStandardPage";
import CommingSoonPage from "./components/pages/commingSoon/CommingSoonPage";
import ContactPage from "./components/pages/contact/ContactPage";
import ErrorPage from "./components/pages/Error/ErrorPage";
import HomePage2 from "./components/pages/Home2/HomePage2";
import ProjectDetailsPage from "./components/pages/projectDetails/ProjectDetailsPage";
import ProjectsPage from "./components/pages/projects/ProjectsPage";
import ServicesPage from "./components/pages/service/Serevices";
// import ServicesPage from "./components/pages/service/ServicesPage";
import ServiceDetails from "./components/pages/ServiceDetails/ServiceDetails";
import CoursesPage from "./components/pages/courses/CoursesPage";

// all css import
import "./index.css";
import SingleCourse from "./components/pages/courses/single-course/SingleCourse";
import LoginPage from "./components/pages/admin-panel/LoginPage";
import SignUpPage from "./components/pages/admin-panel/SignUpPage";

//Default Warniing Error Hide
console.log = console.warn = console.error = () => { };

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
          {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/commingsoon`}
            component={CommingSoonPage}
          /> */}
          <Route exact path="/" component={MainLayout} />
          <Route path={`${process.env.PUBLIC_URL}/login`} component={LoginPage} />
          <Route path={`${process.env.PUBLIC_URL}/signup`} component={SignUpPage} />

          {/* <Route exact path="/home2" component={SecoundLayout} /> */}
          <Layout>
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/home2`}
              component={HomePage2}
            /> */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about`}
              component={AboutPage}
            />
            <Route
              exact
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
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/error`}
              component={ErrorPage}
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
              path={`${process.env.PUBLIC_URL}/courses/html-css-course`}
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
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Root;

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <Root />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
