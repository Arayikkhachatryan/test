import React, { useState } from "react";
import { Fragment } from "react";
import { CONFIG } from "../../../config";
import AdminPanelAside from "./admin-panel-sections/AdminPanelAside";

const AdminPanel = () => {
  const [active, setActive] = useState();
  return (
    <section className="admin-panel-wrapper">
      <AdminPanelAside setActive={setActive} active={active}>
        {CONFIG.adminPanelAside.map((item, idx) => {
          if (item.id === active) return <Fragment key={idx}>{item.component}</Fragment>;
        })}
      </AdminPanelAside>
    </section>
  );
};

export default AdminPanel;
