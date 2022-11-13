import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import LetsTalkArea from "../../common/LetsTalkArea";
import HowWeWorkArea from "./HowWeWorkArea";
import ServicePrice from "./ServicePrice";
import WhatWeDoArea from "./WhatWeDoArea";
import { useTranslation } from "react-i18next";

function ServicesPage() {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb pageName={t("breadCrumbs.services")} />
      <WhatWeDoArea />
      <HowWeWorkArea />
      <ServicePrice />
      <LetsTalkArea />
    </>
  );
}

export default ServicesPage;
