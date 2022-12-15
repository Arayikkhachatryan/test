import React from "react";
import { CONFIG } from "../../../../config";
import { BsCardText } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const AdminPanelAside = ({ children, setActive, active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const icons = [BsCardText, FaUsers, MdMiscellaneousServices, MdOutlineWork];
  return (
    <>
      <aside style={{ width: isOpen ? "400px" : "120px" }}>
        <GiHamburgerMenu onClick={() => setIsOpen((prev) => !prev)} />
        {CONFIG.adminPanelAside.map((item, idx) => {
          const Icons = icons[idx];
          return (
            <div
              key={idx}
              className="aside-container"
              onClick={() => setActive(item.id)}
              style={{
                backgroundColor: item.id === active ? "#26264f" : "",
              }}
            >
              <div>
                <Icons />
                <p style={{ display: isOpen ? "block" : "none" }}>
                  {item.name}
                </p>
              </div>
            </div>
          );
        })}
      </aside>
      <div className="admin-panel-content">{children}</div>
    </>
  );
};

export default AdminPanelAside;
