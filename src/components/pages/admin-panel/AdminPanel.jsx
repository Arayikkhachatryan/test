import React, { useState } from "react";
import { CONFIG } from "../../../config";
import AdminPanelAside from "./admin-panel-sections/AdminPanelAside";
import AdminPanelCoruseCards from "./admin-panel-sections/AdminPanelCoruseCards";
import AdminPanelCourse from "./admin-panel-sections/AdminPanelCourse";
import AdminPanelPortfolio from "./admin-panel-sections/AdminPanelPortfolio";
import AdminPanelServices from "./admin-panel-sections/AdminPanelServices";
import AdminPanelTrainers from "./admin-panel-sections/AdminPanelTrainers";

const AdminPanel = () => {
  const [active, setActive] = useState();

  const adminPanelComponents = [
    AdminPanelCoruseCards,
    AdminPanelCourse,
    AdminPanelTrainers,
    AdminPanelServices,
    AdminPanelPortfolio,
  ];
  return (
    <section className="admin-panel-wrapper">
      <AdminPanelAside setActive={setActive} active={active}>
        {CONFIG.adminPanelAside.map((item, idx) => {
          const Component = adminPanelComponents[idx];
          if (item.id === active) return <Component key={idx} />;
        })}
      </AdminPanelAside>
    </section>
  );
};

export default AdminPanel;
