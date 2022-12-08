import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import ProjectWrapper from "./ProjectWrapper";
import { useTranslation } from "react-i18next";
import Layout from "../../App";

function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <Breadcrumb pageName={t("breadCrumbs.projects")} />
        <ProjectWrapper />
      </Layout>
    </>
  );
}

export default ProjectsPage;
