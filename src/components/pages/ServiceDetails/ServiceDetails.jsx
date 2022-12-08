import React from "react";
import Layout from "../../App";
import Breadcrumb from "../../common/Breadcrumb";
import ServiceDetailsWrapper from "./ServiceDetailsWrapper";

function ServiceDetails() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Service Details" />
        <ServiceDetailsWrapper />
      </Layout>
    </>
  );
}

export default ServiceDetails;
