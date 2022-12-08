import React from "react";
import { CONFIG } from "../../../../config";
import { BsCardText } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";

const AdminPanelAside = ({ children, setActive, active }) => {
  const icons = [BsCardText, FaUsers, MdMiscellaneousServices, MdOutlineWork];
  return (
    <>
      <aside>
        {CONFIG.adminPanelAside.map((item, idx) => {
          const Icons = icons[idx];
          return (
            <div
              key={idx}
              className="aside-container"
              onClick={() => setActive(item.id)}
              style={{ backgroundColor: item.id === active ? "#26264f" : "" }}
            >
              <div>

              <Icons />
              <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </aside>
      {children}
    </>
  );
};

export default AdminPanelAside;
