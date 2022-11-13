import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import ProjectWrapper from "./ProjectWrapper";
import { useTranslation } from "react-i18next";


function ProjectsPage() {

  const { t } = useTranslation();


  return (
    <>
      <Breadcrumb pageName={t("breadCrumbs.projects")} />
      <ProjectWrapper />
    </>
  );
}

export default ProjectsPage;
